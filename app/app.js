import express from 'express';
import errorMiddleware from './routes/middleware/error.middleware';
import { healthRouter } from './routes/api/health.controller';
import { menuRouter } from './routes/api/menu.controller';

export const app = () => {
    const expressApi = express();
    const baseApiRoute = '/api';

    // Middleware
    expressApi.use(express.json());
    expressApi.use(errorMiddleware);

    // Controllers
    expressApi.use(baseApiRoute, healthRouter);
    expressApi.use(baseApiRoute, menuRouter);

    return expressApi;
};
