const React = require('react');
const ReactDOMServer = require('react-dom/server');
const mjml = require('mjml');

const Components = require('./components');

module.exports = (data, component) => {
  var Base;

  if (component in Components) {
    Base = Components[component];
  } else throw new Error(`No component defined with name ${component}`)

  const rootElemComponent = React.createElement(Base, data);
  const content = ReactDOMServer.renderToStaticMarkup(rootElemComponent);

  return mjml.mjml2html(content);
};
