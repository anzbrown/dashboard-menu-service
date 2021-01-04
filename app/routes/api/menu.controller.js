const express = require('express');
const { getMenu, updateMenu } = require('../../service/menu.service');

const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, async (request, response, next) => {
    try {
        const menus = await getMenu(request.tenantId);
        response.send(menus);
    } catch (error) {
        next(error);
    }
});
menuRouter.post(menuPath, async (request, response, next) => {
    try {
        const menuItems = request.body;
        await updateMenu(menuItems, request.tenantId);
        response.send(menuItems);
    } catch (error) {
        next(error);
    }
});
module.exports = {
    menuRouter,
};
