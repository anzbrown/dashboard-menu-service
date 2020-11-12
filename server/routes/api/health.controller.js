import express from 'express';

export const healthRouter = express.Router();
const healthPath = '/health';

healthRouter.get(healthPath, (_request, response) => {
    try {
        const healthy = { status: 'UP' };
        response.send(healthy);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
