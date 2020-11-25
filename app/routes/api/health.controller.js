const express = require('express');

const healthRouter = express.Router();
const healthPath = '/health';

healthRouter.get(healthPath, (_request, response) => {
    const healthy = { status: 'UP' };
    response.send(healthy);
});
module.exports = {
    healthRouter,
};
