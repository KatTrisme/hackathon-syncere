const keystore = require('../../keystore.json');
const keystorePassword = 'gochain';
const chainUrl = 'https://lisbon.net.solidwallet.io/api/v3';

const scoreAddress = 'cx3f7a4cc8f9ed5eefbef17c8511a31fc7d47f902b';
const dbName = 'test';
const dbUri = 'mongodb://syncere-db:27017/';

module.exports =  {
    chainUrl,
    keystore,
    keystorePassword,
    scoreAddress,
    dbUri,
    dbName,
}