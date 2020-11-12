import express from 'express';
import { getMenu, updateMenu } from '../../service/menu.service';

export const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, async (request, response) => {
    try {
        const menus = await getMenu(request.headers['x-tenant-id']);
        response.send(menus);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
menuRouter.post(menuPath, async (request, response) => {
    try {
        const menuItems = request.body;
        await updateMenu(menuItems, request.headers['x-tenant-id']);
        response.send(menuItems);
    } catch (e) {
        response.status(500).send(e.message);
    }
});
