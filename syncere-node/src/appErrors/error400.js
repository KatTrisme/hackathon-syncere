const httpStatusCodes = require('../util/httpStatusCodes');
const BaseError = require('./baseError');

class Error400 extends BaseError {
    constructor(name,
                statusCode = httpStatusCodes.BAD_REQUEST,
                description = 'Client sent bad request.') {
        super(name, statusCode, description);
    }
}

module.exports = Error400;