const QRCode = require('qrcode');

function createQr(itemData) {
    let qrCode = '';

    QRCode.toString(itemData, {
        type: 'svg'
    }, function (err, transformedData) {
        if(err) throw err;
        console.log(transformedData)

        qrCode = Buffer.from(transformedData).toString ('base64');
    });

    return qrCode;
}

module.exports = {createQr}