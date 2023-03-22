class BaseError extends Error {
    constructor(name, statusCode, description) {
        super(description);

        this.name = name;
        this.statusCode = statusCode;
    }
}

module.exports = BaseError;