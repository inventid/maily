if (!global._babelPolyfill) {
  require('babel-polyfill');
}

const createRenderServer = require('./src/index');
const htmlComponents = require('./example/components/html/index');
const textComponents = require('./example/components/text/index');

const port = process.env.PORT || 3000;

const logger = (level, message) => {
  console.log(JSON.stringify({level, message, datetime: (new Date()).toISOString()}));
};

const onReady = () => logger('info', 'Server is ready');

createRenderServer(htmlComponents, textComponents, {logger, mjmlStrict: true}).listen(port, onReady);
