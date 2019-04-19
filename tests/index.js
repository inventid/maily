import fetch from 'node-fetch';
import fs from 'fs';
import DiffMatchPatch from 'diff-match-patch';
import color from 'cli-color';
import createRenderServer from '../src';
import htmlComponents from './src';
import plain from './src/plain_text';
import htmlEntities from './src/htmlEntities';

const textComponents = { plain, htmlEntities };

const dir = `${__dirname}/result`;
const port = process.env.PORT || 3000;

const logger = (level, message) => {
	if (level === 'info') {
		// Drop these in tests
		return;
	}
	console.log(JSON.stringify({ level, message, datetime: (new Date()).toISOString() }));
};

const cliColors = {
	'-1': color.greenBright,
	0: x => x,
	1: color.redBright,
};

const WRITE_MODE = process.argv[2] === '--update';
const dmp = new DiffMatchPatch();
const fileOptions = {
	encoding: 'utf8',
};
const compare = async (template, path, result) => {
	if (WRITE_MODE) {
		console.log(color.green(`Writing ${template} to ${path}`));
		fs.writeFileSync(path, result, fileOptions);
	} else {
		const expectation = fs.readFileSync(path, fileOptions).toString();
		if (expectation !== result) {
			console.log(color.red(`\n\nMismatch in ${template}. The following diff was generated:`));

			const diff = dmp.diff_main(expectation, result, false);
			for (let i = 0; i < diff.length; i += 1) {
				let [type, text] = diff[i];
				if (text === '\n') {
					text = '<NEW_LINE>';
				} else if (text && text.trim().length === 0) {
					text = '<EMPTY_LINE />';
				}
				const colored = cliColors[type.toString()](text);
				process.stdout.write(colored);
			}
			process.exit(1);
		}
	}
};

let server;
const onReady = async () => {
	const htmlTemplates = Object.keys(htmlComponents);
	const textTemplates = Object.keys(textComponents);

	await fs.access(dir, fs.constants.F_OK, async (err) => {
		if (err) {
			await fs.mkdir(dir);
		}
	});

	for (let i = 0; i < htmlTemplates.length; i += 1) {
		const template = htmlTemplates[i];
		const result = await fetch(`http://localhost:${port}/${template}.html`).then(x => x.text());
		const path = `${dir}/${template}.html`;
		await compare(template, path, result);
	}
	for (let i = 0; i < htmlTemplates.length; i += 1) {
		const template = htmlTemplates[i];
		const result = await fetch(`http://localhost:${port}/${template}.mjml`).then(x => x.text());
		const path = `${dir}/${template}.mjml`;
		await compare(template, path, result);
	}
	for (let i = 0; i < textTemplates.length; i += 1) {
		const template = textTemplates[i];
		const result = await fetch(`http://localhost:${port}/${template}.txt`).then(x => x.text());
		const path = `${dir}/${template}.txt`;
		await compare(template, path, result);
	}

	console.log(color.yellow('Some errors are expected below as part of the test suite'));

	// No such template
	const notFoundStatus = await fetch(`http://localhost:${port}/ThisOneReallyDoesNotExist.html`).then(x => x.status);
	if (notFoundStatus !== 404) {
		// Should not exist
		console.error(color.redBright(`Non existing template did not return a 404, got ${notFoundStatus} instead`));
		process.exit(1);
	}

	// No such template
	const brokenStatus = await fetch(`http://localhost:${port}/broken.html`).then(x => x.status);
	if (brokenStatus !== 500) {
		// Should have thrown
		console.error(color.redBright(`Broken template did not return a 500, got ${brokenStatus} instead`));
		process.exit(1);
	}

	// No such type
	const typeStatus = await fetch(`http://localhost:${port}/plain_mjml.jpg`).then(x => x.status);
	if (typeStatus !== 400) {
		// Should have thrown
		console.error(color.redBright(`Unknown type did not return a 400, got ${typeStatus} instead`));
		process.exit(1);
	}

	server.close();

	if (WRITE_MODE) {
		console.log(color.red('All snapshots have been written'));
	} else {
		console.log(color.green('All snapshots match'));
	}
};

const options = {
	logger,
	mjmlStrict: true,
	// Uses the exact same format as those for HTMLMinifier https://www.npmjs.com/package/html-minifier
	minificationOptions: {},
};
server = createRenderServer(htmlComponents, textComponents, options).listen(port, onReady);
