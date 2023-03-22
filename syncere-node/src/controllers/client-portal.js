const clientOperationsService = require('../services/client-operations');

async function getProduct(req, res, next) {
    try {


        const product = await clientOperationsService.getEntry({id: req.query.id, hash: req.query.hash});
        console.log(product)
        let resp = {
            data: {
                result: 'Got product',
                productData: product
            }
        }
        res.json(resp);
    } catch (error) {
        next(error);
    }

}

module.exports = {
    getProduct
}