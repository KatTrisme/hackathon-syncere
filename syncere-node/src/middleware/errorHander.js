const httpStatusCodes = require('../util/httpStatusCodes');
const BaseError = require('../appErrors/baseError');

function handleErrors(err, req, res, next) {
    if (!(err instanceof BaseError)) {
        res.status(httpStatusCodes.INTERNAL_SERVER);
        res.send("Internal server error");
    } else {
        res.status(err.statusCode);
        res.send(err.message);
    }
}

module.exports = handleErrors;