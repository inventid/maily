const React = require('react');
const ReactDOMServer = require('react-dom/server');

const getBaseComponent = (components, component) => {
  if (component in components) {
    return components[component];
  } else throw new Error(`No component defined with name ${component}`)
};

const renderReact = (component, data) => {
  const rootElemComponent = React.createElement(component, data);
  return ReactDOMServer.renderToStaticMarkup(rootElemComponent);
};

export {getBaseComponent, renderReact};
