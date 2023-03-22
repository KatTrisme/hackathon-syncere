const httpStatusCodes = require('../util/httpStatusCodes');
const BaseError = require('./baseError');

class Error404 extends BaseError {
    constructor(name,
                statusCode = httpStatusCodes.NOT_FOUND,
                description = 'Not found.') {
        super(name, statusCode, description);
    }
}

module.exports = Error404;