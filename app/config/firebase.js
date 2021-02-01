const admin = require('firebase-admin');

/**
 * this way of intializing the SDK is strongly recommeneded for applications
 * running on Compute Engine, Kubernetes Engine, App Engine, and Cloud Functions.
 * @type {app.App}
 */
const firebaseApp = admin.initializeApp();
const fireStoreDb = admin.firestore();

module.exports = {
    firebaseApp,
    fireStoreDb,
};
