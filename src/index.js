const express = require('express');
const bodyParser = require('body-parser');

const render = require('./render');

const PORT = 3000;
const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

server.get('/favicon.ico', (request, response, next) => response.status('404').end());

server.get('/:root/', (request, response) => {
  const data = request.query;
  const root = request.params.root;
  response.send(render(data, root)).end();
});

server.post('/:root/', (request, response) => {
  const data = request.body;
  const root = request.params.root;
  response.send(render(data, root)).end();
});


server.listen(PORT);
