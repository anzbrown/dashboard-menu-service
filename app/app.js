const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { healthRouter } = require('./routes/api/health.controller');
const { menuRouter } = require('./routes/api/menu.controller');
const { tenantParser } = require('./routes/middleware/tenant.parser');
const { errorHandler } = require('./routes/middleware/error.handler');

const app = () => {
    const corsOptions = {
        origin: 'https://snowflake-client-dot-dashboard-menu-service.ew.r.appspot.com',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };

    const expressApi = express();
    const baseApiRoute = '/api';

    // enable CORS for testing
    expressApi.use(cors(corsOptions));
    // enable HTTP security headers using helmet lib
    expressApi.use(helmet());

    // Middleware
    expressApi.use(express.json());
    expressApi.use(tenantParser);

    // Controllers
    expressApi.use(baseApiRoute, healthRouter);
    expressApi.use(baseApiRoute, menuRouter);

    // error handler
    expressApi.use((error, req, res, next) =>
        errorHandler(error, req, res, next)
    );

    return expressApi;
};
module.exports = {
    app,
};
