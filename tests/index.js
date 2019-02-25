import fetch from 'node-fetch';
import fs from 'fs';
import createRenderServer from '../src';
import htmlComponents from './src';
import DiffMatchPatch from 'diff-match-patch';
import color from 'cli-color';
import plain from './src/plain_text';

const textComponents = {plain};

const dir = `${__dirname}/result`;
const port = process.env.PORT || 3000;

const logger = (level, message) => {
	if (level === 'info') {
		// Drop these in tests
		return;
	}
	console.log(JSON.stringify({level, message, datetime : (new Date()).toISOString()}));
};

const cliColors = {
	'-1' : color.greenBright,
	'0' : x => x,
	'1' : color.redBright,
};

const WRITE_MODE = process.argv[2] === '--update';
const dmp = new DiffMatchPatch();
const fileOptions = {
	encoding : 'utf8',
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
			for (let i = 0; i < diff.length; i++) {
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

	for (let i = 0; i < htmlTemplates.length; i++) {
		const template = htmlTemplates[i];
		const result = await fetch(`http://localhost:3000/${template}.html`).then(x => x.text());
		const path = `${dir}/${template}.html`;
		await compare(template, path, result);
	}
	for (let i = 0; i < htmlTemplates.length; i++) {
		const template = htmlTemplates[i];
		const result = await fetch(`http://localhost:3000/${template}.mjml`).then(x => x.text());
		const path = `${dir}/${template}.mjml`;
		await compare(template, path, result);
	}
	for (let i = 0; i < textTemplates.length; i++) {
		const template = textTemplates[i];
		const result = await fetch(`http://localhost:3000/${template}.txt`).then(x => x.text());
		const path = `${dir}/${template}.txt`;
		await compare(template, path, result);
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
	mjmlStrict : true,
	// Uses the exact same format as those for HTMLMinifier https://www.npmjs.com/package/html-minifier
	minificationOptions : {}
};
server = createRenderServer(htmlComponents, textComponents, options).listen(port, onReady);
