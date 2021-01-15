const { Firestore } = require('@google-cloud/firestore');
const { FirestoreStore } = require('@google-cloud/connect-firestore');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const { SESSION_SECRET } = process.env;

/**
 * express-session config, storing sessions in GCP Firestore
 */
const sessionOptions = session({
    store: new FirestoreStore({
        dataset: new Firestore(),
        kind: 'express-sessions',
    }),
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 5 * 60 * 1000,
    },
});

/**
 * CORS configuration for webapp
 */
const corsOptions = cors({
    origin: [
        'https://snowflake-client-dot-dashboard-menu-service.ew.r.appspot.com',
    ],
});

/**
 * enable HTTP security headers using helmet lib
 * can be extended later without polluting the {{app.js}} file with excessive
 * config details
 */
const helm = helmet();

module.exports = {
    helm,
    corsOptions,
    sessionOptions,
};
