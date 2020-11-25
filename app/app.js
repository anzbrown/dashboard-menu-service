const express = require('express');
const { healthRouter } = require('./routes/api/health.controller');
const { menuRouter } = require('./routes/api/menu.controller');
const { tenantParser } = require('./routes/middleware/tenant.parser');

const app = () => {
    const expressApi = express();
    const baseApiRoute = '/api';

    // Middleware
    expressApi.use(express.json());
    expressApi.use(tenantParser);

    // Controllers
    expressApi.use(baseApiRoute, healthRouter);
    expressApi.use(baseApiRoute, menuRouter);

    return expressApi;
};
module.exports = {
    app,
};
