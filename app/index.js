import { app } from './app';
import logger from './util/logger';

const port = process.env.PORT || 8080;
const application = app();

const server = application.listen(port, async () => {
    logger.info(`Application started. Listening on port: ${port}`);
});

// graceful shutdown handler
process.on('SIGTERM', async () => {
    logger.error('SIGTERM signal received.');
    logger.error('Closing http app.');
    server.close(async () => {
        logger.info('Http app closed.');
        process.exit(0);
    });
});
