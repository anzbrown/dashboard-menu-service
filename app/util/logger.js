import winston from 'winston';
import gcWinston from '@google-cloud/logging-winston';

const { KEY_FILE, GOOGLE_CLOUD_PROJECT } = process.env;

const winstonOptions =
    process.env.NODE_ENV === 'production'
        ? {}
        : {
              keyFilename: KEY_FILE,
              projectId: GOOGLE_CLOUD_PROJECT,
          };

const loggingWinston = new gcWinston.LoggingWinston(winstonOptions);

// Create a Winston logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/winston_log"
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        // Add Stackdriver Logging
        loggingWinston,
    ],
});
export default logger;
