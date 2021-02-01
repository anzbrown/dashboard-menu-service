const { fireStoreDb } = require('../config/firebase');
const { logger } = require('../util/logger');

const COLLECTION = 'menus';
const saveMenu = async (menu, tenantId) => {
    logger.debug(menu);
    const menusRef = fireStoreDb.collection(COLLECTION).doc(tenantId);
    await menusRef.set(Object.assign({}, menu));
};
const getMenuByTenantId = async tenantId => {
    logger.debug(tenantId);
    const menusRef = fireStoreDb.collection(COLLECTION).doc(tenantId);
    const doc = await menusRef.get();
    return doc.data();
};
module.exports = { saveMenu, getMenuByTenantId };
