import express from "express";
import bodyParser from "body-parser";
import html_strip from "htmlstrip-native";
import {getBaseComponent, renderReact} from "./render";
const mjml = require('mjml');

const HTML = 'html';
const TXT = 'txt';
const AllowedTypes = [HTML, TXT];

const TEXT_HTML = 'text/html';
const TEXT_PLAIN = 'text/plain';
const CONTENT_TYPE = 'Content-Type';

const INFO = 'info';
const WARN = 'warning';
const ERROR = 'error';

const html2text = (html) => {
  return html_strip.html_strip(html.replace(/<br\s*\/?>/g, "\n"), {
    include_script: false,
    include_style: false,
    compact_whitespace: false,
    include_attributes: {'alt': false}
  });
};

const defaultLogger = (level, message) => console.log(`${new Date()} ${level}: ${message}`);

const renderEngine = (htmlComponents, textComponents, log = defaultLogger) => {
  const createMail = (template, type, data, response) => {
    if (!AllowedTypes.includes(type)) {
      log(WARN, `Requested type ${type} could not be handled for template ${template}`);
      response.status('400').end();
      return;
    }

    let components;
    let prepareRender;
    let contentType;
    if (type === HTML) {
      components = htmlComponents;
      prepareRender = mjml.mjml2html;
      contentType = TEXT_HTML;
    } else if (type === TXT) {
      components = textComponents;
      prepareRender = html2text;
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

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded());

  server.get('/favicon.ico', (request, response) => response.status('404').end());

  server.get('/:template.:type', (req, res) => createMail(req.params.template, req.params.type, req.query, res));
  server.post('/:template.:type', (req, res) => createMail(req.params.template, req.params.type, req.body, res));

  return server;
};

export default renderEngine;