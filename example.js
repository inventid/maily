const createRenderServer = require('./src/index.js');
const htmlComponents = require('./example/components/html/index');
const textComponents = require('./example/components/text/index');

const port = process.env.PORT || 3000;

const log = (level, message) => {
  console.log(JSON.stringify({level,message, datetime: (new Date()).toISOString()}));
};

const onReady = () => {
  console.log(JSON.stringify({level: 'info', message: 'Server is ready'}));
};

createRenderServer(htmlComponents, textComponents, log).listen(port, onReady);
