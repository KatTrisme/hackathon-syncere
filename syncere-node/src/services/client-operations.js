const IconService = require('icon-sdk-js');
const config = require('../config');
const databaseService = require('./database');

function getEntry(entry) {
    const provider = new IconService.default.HttpProvider(config.chainUrl);
    const iconService = new IconService.default(provider);

     const execResult = iconService.getTransactionResult(entry.hash).execute()
        .then((result) => {
            console.log("transaction status(1:success, 0:failure): " + result.status);
            if (result.status === 1) {
                console.log('transaction was good');
                console.log(entry.id)
                return databaseService.getProduct(entry.id);
            } else return null;
        }).then(product => {
             const buff = Buffer.from(product.data, "base64");
             return {id: entry.id, hash: entry.hash ,data:  buff.toString('utf-8')};

         }).catch(err => {throw err;});

    console.log(execResult)
    return execResult;
}

module.exports = {getEntry}