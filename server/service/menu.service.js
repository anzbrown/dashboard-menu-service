import { CloudStore } from '../repository/cloudStore';

const updateMenu = async (menu, tenantId) =>
    await CloudStore.updateMenu(menu, tenantId);

const getMenu = async tenantId => await CloudStore.getMenu(tenantId);

export { updateMenu, getMenu };
