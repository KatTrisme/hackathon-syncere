const mongoDBClient = require('../dataStore/mongoDB');
const appConfig = require('../config');
const mongo = require('mongodb');
const Error404 = require('../appErrors/error404');

async function saveProduct(scoreAddress,blockHash,data) {
    try {
        await mongoDBClient.connect()
        const database = mongoDBClient.db(appConfig.dbName);
        const products = database.collection('products');
        const doc = {
            scoreAddress: scoreAddress,
            blockHashes: [blockHash],
            data: data,
        }
        const result = await products.insertOne(doc);
        console.log(result)
        return {id: result.insertedId, hash: blockHash}
        } catch (err) {
        console.log(err);
        throw err;
    } finally {
        await mongoDBClient.close();
    }
}

async function getProduct(id) {
    try {
        await mongoDBClient.connect()
        const database = mongoDBClient.db(appConfig.dbName);
        const products = database.collection('products');
        const options = {
            projection: { data: 1},
        };

        console.log("GETTING PRODUCT")
        const result = await products.findOne({
            _id: new mongo.ObjectId(id)
        }, options);

        console.log(result)
    //     const result = await products.updateOne(
    //         {_id: id },
    //     { $push: { blockHashes: blockHash } }
    // );
        return result;
    } catch (err) {
        console.log(err)
        throw new Error404('Could not find product.');
    } finally {
        await mongoDBClient.close();
    }
}

async function updateProduct(id,newBlockHash, data) {
    try {
        await mongoDBClient.connect()
        const database = mongoDBClient.db(appConfig.dbName);
        const products = database.collection('products');

        console.log("UPDATING PRODUCT")

        const result = await products.updateOne(
                    {_id: new mongo.ObjectId(id) },
                { $push: { blockHashes: newBlockHash }, $set: { data: data } }
            );

        console.log(result)
        console.log(result.data)
        return result.data;
    } catch (err) {
        console.log(err)
        throw new Error404('Could not update product.');
    } finally {
        await mongoDBClient.close();
    }
}
module.exports = {saveProduct, getProduct, updateProduct}