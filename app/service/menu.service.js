const { saveMenu, getMenuByTenantId } = require('../repository/fireStore');

/**
 * sort the menu list by priority attribute, save into Firestore DB
 * @param menus list of menu items to sort and persist
 * @param tenantId
 * @returns sorted menu list
 */
const updateMenu = async (menus, tenantId) => {
    menus.sort((itemA, itemB) => itemA.priority - itemB.priority);
    await saveMenu(menus, tenantId);
    return menus;
};

/**
 * retrieve menu list from Firestore DB by tenantId
 * @param tenantId to use as the key to retrieve from Firestore
 * @returns menu list for tenant
 */
const getMenu = async tenantId => await getMenuByTenantId(tenantId);

module.exports = { updateMenu, getMenu };
