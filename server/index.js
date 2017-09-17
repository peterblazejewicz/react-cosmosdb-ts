const path = require('path');
const config = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});
const app = require('./app');
const debug = require('debug')('express-react:server');
const http = require('http');

const normalizePort = val => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCESS':
      console.error(`${bind} requires elevated privilages`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const address = server.address();
  const bind =
    typeof address === 'string' ? `pipe ${address}` : `port ${address}`;
};

const port = normalizePort(process.env.PORT || 3001);
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
