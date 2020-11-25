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

const COLLECTION = 'menus';
const fireStoreDb = new firestore.Firestore(firestoreOptions);
const saveMenu = async (menu, tenantId) => {
    logger.debug(menu);
    const menusRef = fireStoreDb.collection(COLLECTION).doc(tenantId);
    await menusRef.set(Object.assign({}, menu));
};
const getMenuByTenantId = async tenantId => {
    logger.debug(tenantId);
    const menusRef = fireStoreDb.collection(COLLECTION).doc(tenantId);
    const doc = await menusRef.get();
    if (doc.exists) {
        return doc.data();
    } else {
        logger.warn('No menu exists for Tenant');
    }
};
export { saveMenu, getMenuByTenantId };
