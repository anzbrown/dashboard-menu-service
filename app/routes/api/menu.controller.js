const express = require('express');
const { getMenu, updateMenu } = require('../../service/menu.service');

const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, async (request, response) => {
    const menus = await getMenu(request.tenantId);
    response.send(menus);
});
menuRouter.post(menuPath, async (request, response) => {
    const menuItems = request.body;
    await updateMenu(menuItems, request.tenantId);
    response.send(menuItems);
});
module.exports = {
    menuRouter,
};
