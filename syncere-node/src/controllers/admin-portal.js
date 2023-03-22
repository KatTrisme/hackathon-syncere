const adminOperationsService = require('../services/admin-operations');
const qrService = require('../services/qr');

async function createProduct(req, res, next) {
    try {
        console.log(req.body)
        let blockData = await adminOperationsService.createNewEntry(req.body);
        console.log(blockData)
        const stringBlockData = JSON.stringify(blockData);
        const qrCode = qrService.createQr(stringBlockData);

        let resp = {
            data: {
                result: 'Created product',
                qrImgString: qrCode
            }
        }
        res.json(resp);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        console.log(req.body)
        let blockData = await adminOperationsService.updateEntry(req.body);
        console.log(blockData)
        const stringBlockData = JSON.stringify(blockData);
        const qrCode = qrService.createQr(stringBlockData);

        let resp = {
            data: {
                result: 'Updated product',
                qrImgString: qrCode
            }
        }
        res.json(resp);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createProduct,
    updateProduct
}