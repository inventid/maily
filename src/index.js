if (!global._babelPolyfill) {
	require('babel-polyfill');
}

import express from 'express';
import bodyParser from 'body-parser';
import striptags from 'striptags';
import mjml from 'mjml';
import React from 'react';
import pretty from 'pretty';
import {minify} from 'html-minifier';
import ReactDOMServer from 'react-dom/server';

const HTML = 'html';
const TXT = 'txt';
const MJML = 'mjml';
const ALLOWED_TYPES = [HTML, TXT, MJML];

const TEXT_HTML = 'text/html';
const TEXT_PLAIN = 'text/plain';
const CONTENT_TYPE = 'Content-Type';

const INFO = 'info';
const WARN = 'warning';
const ERROR = 'error';

const getBaseComponent = (components, component) => {
	if (component in components) {
		return components[component];
	} else throw new Error(`No component defined with name ${component}`)
};

const renderReact = (component, data) => {
	const rootElemComponent = React.createElement(component, data);
	return ReactDOMServer.renderToStaticMarkup(rootElemComponent);
};

const html2text = (html) => {
	return striptags(html.replace(/<br\s*\/?>/g, "\n"))
		.split("\n")
		.map(l => l.trim())
		.join("\n");
};

const defaultLogger = (level, message) => console.log(`${new Date()} ${level}: ${message}`);

const createRenderServer = (htmlComponents, textComponents, options) => {
	let log = defaultLogger;
	if (typeof options === 'function') {
		log(WARN, "Deprecation notice: A logger was passed instead of an options object. The logger should be on the `log` key of the options object instead.");
		log = options;
	} else if (options.logger) {
		log = options.logger;
	}
	let htmlFormat = input => pretty(input, {ocd : true});
	if (options.minificationOptions && typeof options.minificationOptions === 'object') {
		htmlFormat = input => minify(input, options.minificationOptions);
	}

	const mjmlStrict = options.mjmlStrict || false;
	const mjmlRenderOptions = mjmlStrict ? {level : 'strict'} : {};

	const createMail = (template, type, data, response) => {
		if (!ALLOWED_TYPES.includes(type)) {
			log(WARN, `Requested type ${type} could not be handled for template ${template}`);
			response.status('400').end();
			return;
		}

		let components;
		let prepareRender;
		let contentType;
		if (type === HTML) {
			components = htmlComponents;
			prepareRender = (i) => {
				const rendered = mjml(i, mjmlRenderOptions);
				if (mjmlStrict && rendered.errors.length > 0) {
					// Intentionally logging both
					log(WARN, `MJML validation errors encountered in template '${template}': ${rendered.errors.map(e => JSON.stringify(e)).join('\n')}`);
					console.warn(`MJML validation errors encountered in template '${template}': ${rendered.errors.map(e => JSON.stringify(e)).join('\n')}`);
				}
				return htmlFormat(rendered.html);
			};
			contentType = TEXT_HTML;
		} else if (type === TXT) {
			components = textComponents;
			prepareRender = html2text;
			contentType = TEXT_PLAIN;
		} else if (type === MJML) {
			components = htmlComponents;
			prepareRender = (e) => pretty(e, {ocd : true});
			contentType = TEXT_PLAIN;
		} else {
			response.status(500).end();
			log(ERROR, `Type ${type} was accepted but not handled!`);
			return;
		}

		try {
			let reactTemplate;
			try {
				reactTemplate = getBaseComponent(components, template);
			} catch (e) {
				log(WARN, `Template ${template} does not exist for requested type ${type}`);
				response.status(404).end();
				return;
			}
			response.set(CONTENT_TYPE, contentType).send(prepareRender(renderReact(reactTemplate, data))).end();
			log(INFO, `Rendered template ${template} for type ${type}`);
		} catch (e) {
			log(ERROR, `Error occured while rendering: "${e}"`);
			response.status(500).end();
		}

	};

	const server = express();

	server.use(bodyParser.json({limit : '1mb'}));
	server.use(bodyParser.urlencoded({limit : '1mb', extended : true}));

	server.get('/favicon.ico', (request, response) => response.status('404').end());

	server.get('/:template.:type', (req, res) => createMail(req.params.template, req.params.type, req.query, res));
	server.post('/:template.:type', (req, res) => {
		const data = req.body;
		Object.keys(req.query).forEach(value => {
			if (data[value]) {
				log(WARN, `Body property '${value}' was overwritten by query param.`);
			}
			data[value] = req.query[value];
		});
		createMail(req.params.template, req.params.type, data, res)
	});

	return server;
};

export default createRenderServer;
