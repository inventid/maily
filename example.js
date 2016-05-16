import renderEngine from './src/index.js';
import HtmlComponentList from './example/htmlComponents/index';
import TextComponentList from './example/textComponents/index';

const port = process.env.PORT || 3000;

const log = (level, message) => {
  console.log(JSON.stringify({level,message}));
};

const onReady = () => console.log(JSON.stringify({level: 'info', message: 'Server is ready'}));

renderEngine(HtmlComponentList, TextComponentList, log).listen(port, onReady);
