const httpStatusCodes = require('../util/httpStatusCodes');
const BaseError = require('./baseError');

class Error500 extends BaseError {
    constructor(name,
                statusCode = httpStatusCodes.INTERNAL_SERVER,
                description = 'Application encountered internal error.') {
        super(name, statusCode, description);
    }
}

module.exports = Error500;