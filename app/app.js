const express = require('express');
const compression = require('compression');
const { errorHandler } = require('./routes/middleware/error.handler');
const { helm, corsOptions } = require('./routes/middleware/security.settings');
const { healthRouter } = require('./routes/api/health.controller');
const { menuRouter } = require('./routes/api/menu.controller');
const { authRouter } = require('./routes/api/auth.controller');

const app = () => {
    const expressApi = express();
    const baseApiRoute = '/api';

    // enable CORS for testing
    expressApi.use(helm);
    expressApi.use(corsOptions);
    // expressApi.use(sessionOptions);
    expressApi.use(express.json());
    expressApi.use(compression());

    // Controllers
    expressApi.use(baseApiRoute, healthRouter);
    expressApi.use(baseApiRoute, menuRouter);
    expressApi.use(baseApiRoute, authRouter);

    // error handler
    expressApi.use((error, req, res, next) =>
        errorHandler(error, req, res, next)
    );

    return expressApi;
};
module.exports = {
    app,
};
