const express = require('express');
const { tenantParser } = require('../middleware/tenantParser');
const { getMenu, updateMenu } = require('../../service/menuService');

const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, tenantParser, async (req, res, next) => {
    try {
        const menus = await getMenu(req.tenantId);
        res.send(menus);
    } catch (error) {
        next(error);
    }
});
menuRouter.post(menuPath, tenantParser, async (req, res, next) => {
    try {
        const menuItems = req.body;
        await updateMenu(menuItems, req.tenantId);
        res.send(menuItems);
    } catch (error) {
        next(error);
    }
});
module.exports = {
    menuRouter,
};
