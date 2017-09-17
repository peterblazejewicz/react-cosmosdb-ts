const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

const mongoUri = env.connection;

const connect = () => {
  return mongoose.connect(mongoUri, { useMongoClient: true });
};

module.exports = {
  connect,
  mongoose,
};
