const {MongoClient} = require('mongodb');
const appConfig = require('../config/index');

const uri = appConfig.dbUri;

const client = new MongoClient(uri);

module.exports = client;