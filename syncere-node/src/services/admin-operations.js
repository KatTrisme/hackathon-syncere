const appwallet = require('./wallet');
const iconJs = require('icon-sdk-js');
const scoreContent = require('../util/score-handler');
// const SignedTransaction = require('icon-sdk-js/build/SignedTransaction');
const config = require('../config');
// const HttpProvider = require('icon-sdk-js/build/transport/http/HttpProvider');
const IconService = require('icon-sdk-js');

const databaseService = require('./database');
const {scoreAddress} = require('../config');
const Error404 = require('../appErrors/error404');

const provider = new IconService.default.HttpProvider(config.chainUrl);
// Create IconService instance
const iconService = new IconService.default(provider);

//// const transactionTxHash = await iconService.sendTransaction(signedTokenTransfer).execute();

async function createNewEntry(product) {
    const newProduct = {title: product.title, recalled: false, expDate: product.expDate};
    const txObj = new IconService.default.IconBuilder.CallTransactionBuilder()
        .from(appwallet.getAddress())
        .to(config.scoreAddress)
        .stepLimit(IconService.default.IconConverter.toBigNumber('2000000'))
        .nid(IconService.default.IconConverter.toBigNumber('2'))
        .nonce(IconService.default.IconConverter.toBigNumber('1'))
        .version(IconService.default.IconConverter.toBigNumber('3'))
        .timestamp((new Date()).getTime() * 1000)
        .method('addProduct')
        .params({
            title: newProduct.title,
            expDate: newProduct.expDate,
            recalled: '0'
        })
        .build()

    const signedTokenTransfer = new IconService.default.SignedTransaction(txObj, appwallet);
    let transactionHash = ''
    const verifiedTransactionData = iconService.sendTransaction(signedTokenTransfer).execute().then(txHash => {
        console.log(txHash)
        transactionHash = txHash;
        return sleep(2000);
    })
        .then(() => {
        iconService.getTransactionResult(transactionHash).execute().catch(err => {
            throw new Error404(`Transaction hash ${transactionHash} not found.`);
        })
        return transactionHash;
        // console.log("transaction status(1:success, 0:failure): "+transactionResult.status)
        // if (transactionResult.status === 1) {
        //     const call = new IconService.default.IconBuilder.CallBuilder()
        //         .from(appwallet.getAddress())
        //         .to(config.scoreAddress)
        //         .method('getLatestProduct')
        //         .build();
        //     return iconService.call(call).execute()
        })
        .then((hash) => {
            const newProductString = JSON.stringify(newProduct);
            const newProductStringBase64 = Buffer.from(newProductString).toString ('base64');
            console.log("SAVING DATA")
            return databaseService.saveProduct(config.scoreAddress, hash, newProductStringBase64);
        })
        .then((savedData) => {
            console.log('SAVED HASH');
            console.log(savedData);
            return savedData;
        }).catch(err => {throw err;})
        // .then(() => {

            // const call = new IconService.default.IconBuilder.CallBuilder()
            //     .from(appwallet.getAddress())
            //     .to(config.scoreAddress)
            //     .method('getLatestProduct')
            //     .build();
            // return iconService.call(call).execute()
    // }).then(data => {
    //         console.log(data)
    //     })
    // }).then(data => {
    //     console.log(data)
    // })

    // console.log(createdObj);
    // Check the result with the transaction hash IMPORTANT
    // const transactionResult = await iconService.getTransactionResult(transactionTxHash).execute();
    // console.log("transaction status(1:success, 0:failure): "+transactionResult.status);
    // const newProductString = JSON.stringify(newProduct)
    // const newProductStringBase64 = Buffer.from(newProductString).toString ('base64')
    // const savedHash = databaseService.saveProduct(config.scoreAddress, verifiedTransactionHash, newProductStringBase64)
    console.log(verifiedTransactionData);
    return verifiedTransactionData;
}

async function updateEntry(product) {

    const getResults = await databaseService.getProduct(product.id);
    const decodedRequestBodyString = Buffer.from(getResults.data, "base64");
    const dataObject = JSON.parse(decodedRequestBodyString.toString());
    if (product.title !== '') {
        dataObject.title = product.title
    }
    dataObject.recalled = product.recalled

    const txObj = new IconService.default.IconBuilder.CallTransactionBuilder()
        .from(appwallet.getAddress())
        .to(config.scoreAddress)
        .stepLimit(IconService.default.IconConverter.toBigNumber('2000000'))
        .nid(IconService.default.IconConverter.toBigNumber('2'))
        .nonce(IconService.default.IconConverter.toBigNumber('1'))
        .version(IconService.default.IconConverter.toBigNumber('3'))
        .timestamp((new Date()).getTime() * 1000)
        .method('addProduct')
        .params({
            title: dataObject.title,
            expDate: dataObject.expDate,
            recalled:  dataObject.recalled ? '1' : '0'
        })
        .build();
    console.log(dataObject)
    console.log(dataObject.expDate)
    console.log("BUILT ICON OBJECT")
    const signedTokenTransfer = new IconService.default.SignedTransaction(txObj, appwallet);
    let transactionHash = ''
    return iconService.sendTransaction(signedTokenTransfer).execute().then(txHash => {
        console.log(txHash)
        transactionHash = txHash;
        return sleep(2000);
    })
        .then(() => {
            iconService.getTransactionResult(transactionHash).execute().catch(err => {
                throw new Error404(`Transaction hash ${transactionHash} not found.`);
            })
            return transactionHash;
            // console.log("transaction status(1:success, 0:failure): "+transactionResult.status)
            // if (transactionResult.status === 1) {
            //     const call = new IconService.default.IconBuilder.CallBuilder()
            //         .from(appwallet.getAddress())
            //         .to(config.scoreAddress)
            //         .method('getLatestProduct')
            //         .build();
            //     return iconService.call(call).execute()
        })
        .then((hash) => {
            console.log("UPDATING DATA")
            const stringDataObject = JSON.stringify(dataObject);
            const newData = Buffer.from(stringDataObject).toString('base64')
            return databaseService.updateProduct(product.id,hash,newData)
        })
        .then((savedDataResults) => {
            console.log('SAVED HASH');
            console.log(savedDataResults);
            return {id: product.id, hash: transactionHash};
        }).catch(err => {throw err;})
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

module.exports = {
    createNewEntry,
    updateEntry
}