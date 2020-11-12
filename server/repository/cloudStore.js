import firestore from '@google-cloud/firestore';
import logger from '../util/logger';

const { KEY_FILE, GOOGLE_CLOUD_PROJECT } = process.env;

const firestoreOptions =
    process.env.NODE_ENV === 'production'
        ? { projectId: GOOGLE_CLOUD_PROJECT }
        : {
              projectId: GOOGLE_CLOUD_PROJECT,
              keyFilename: KEY_FILE,
          };

export class CloudStore {
    static COLLECTION = 'menus';
    static firestore = new firestore.Firestore(firestoreOptions);

    static async updateMenu(menu, tenantId) {
        logger.debug(menu);
        const menusRef = this.firestore
            .collection(this.COLLECTION)
            .doc(tenantId);
        await menusRef.set(Object.assign({}, menu));
    }

    static async getMenu(tenantId) {
        logger.debug(tenantId);
        const menusRef = this.firestore
            .collection(this.COLLECTION)
            .doc(tenantId);
        const doc = await menusRef.get();
        if (doc.exists) {
            return doc.data();
        } else {
            logger.warn('No menu exists for Tenant');
        }
    }
}
