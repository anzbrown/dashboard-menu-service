import express from 'express';
import { getMenu, updateMenu } from '../../service/menu.service';

export const menuRouter = express.Router();
const menuPath = '/menu';

menuRouter.get(menuPath, async (request, response) => {
    const menus = await getMenu(request.headers['x-tenant-id']);
    response.send(menus);
});
menuRouter.post(menuPath, async (request, response) => {
    const menuItems = request.body;
    await updateMenu(menuItems, request.headers['x-tenant-id']);
    response.send(menuItems);
});
