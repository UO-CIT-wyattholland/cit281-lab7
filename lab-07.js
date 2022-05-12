class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'CustomError';
    }
}

function throwGenericError() {
    throw new Error('Generic error');
}

function throwCustomError() {
    throw new CustomError('Custom error')
}

try {
    throwGenericError();
} catch (err) {
    console.log(err.message);
}

try {
    throwCustomError();
} catch (err) {
    console.log(err.message);
}