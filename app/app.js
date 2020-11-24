import express from 'express';
import { healthRouter } from './routes/api/health.controller';
import { menuRouter } from './routes/api/menu.controller';
import errorMiddleware from './routes/middleware/error.middleware';

export const app = () => {
    const expressApi = express();
    const baseApiRoute = '/api';

    // Middleware
    expressApi.use(express.json());
    expressApi.use((err, req, res, next) =>
        errorMiddleware(err, req, res, next)
    );

    // Controllers
    expressApi.use(baseApiRoute, healthRouter);
    expressApi.use(baseApiRoute, menuRouter);

    return expressApi;
};
