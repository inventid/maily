
require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');
const html_strip = require('htmlstrip-native');
const mjml = require('mjml');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

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
  return html_strip.html_strip(html.replace(/<br\s*\/?>/g, "\n"), {
    include_script: false,
    include_style: false,
    compact_whitespace: false,
    include_attributes: {'alt': false}
  }).split("\n").map(l => l.trim()).join("\n");
};

const defaultLogger = (level, message) => console.log(`${new Date()} ${level}: ${message}`);

const createRenderServer = (htmlComponents, textComponents, log = defaultLogger) => {
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
      prepareRender = (i) => mjml.mjml2html(i).html;
      contentType = TEXT_HTML;
    } else if (type === TXT) {
      components = textComponents;
      prepareRender = html2text;
      contentType = TEXT_PLAIN;
    } else if ( type === MJML) {
      components = htmlComponents;
      prepareRender = (e) => e;
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

  server.use(bodyParser.json({limit: '1mb'}));
  server.use(bodyParser.urlencoded({limit: '1mb', extended: true}));

  server.get('/favicon.ico', (request, response) => response.status('404').end());

  server.get('/:template.:type', (req, res) => createMail(req.params.template, req.params.type, req.query, res));
  server.post('/:template.:type', (req, res) => createMail(req.params.template, req.params.type, req.body, res));

  return server;
};

module.exports = createRenderServer;
