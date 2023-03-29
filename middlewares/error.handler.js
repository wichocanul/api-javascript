function logErrors(err, req, resp, next) {
    console.log('logErrors');
    console.error(err);
    next(err);
}

function errorHandler(err, req, resp, next) {
    console.log('errorHandler');
    resp.status(500).json({
        message: err.message,
        stack: err.stack
    });
}


function boomErrorHandler(err, req, resp, next) {
    if(err.isBoom) {
        const { output } = err;
        resp.status(output.statusCode).json(output.payload);
    } else {
        next(err);
    }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }