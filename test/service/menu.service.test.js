import { describe, expect, jest, test } from '@jest/globals';
import { updateMenu } from '../../app/service/menu.service';

jest.mock('../../app/repository/fireStore');

describe('updateMenu', () => {
    const testMenu = [
        {
            text: 'Adam',
            iconHint: 'faGamepad',
            url: '/adam',
            priority: 2,
            rolesAllowed: [''],
            items: ['test', 'games'],
        },
        {
            text: 'Heather',
            iconHint: 'faMountain',
            url: '/heather',
            priority: 1,
            rolesAllowed: [''],
            items: ['hobbies', 'career'],
        },
        {
            text: 'Leia',
            iconHint: 'faCat',
            url: '/leia',
            priority: 0,
            rolesAllowed: [''],
            items: ['collar', 'colour'],
        },
        {
            text: 'Jessie',
            iconHint: 'faDog',
            url: '/jessie',
            priority: 4,
            rolesAllowed: [''],
            items: ['collar', 'colour'],
        },
    ];
    const expectedMenu = [
        {
            iconHint: 'faCat',
            items: ['collar', 'colour'],
            priority: 0,
            rolesAllowed: [''],
            text: 'Leia',
            url: '/leia',
        },
        {
            iconHint: 'faMountain',
            items: ['hobbies', 'career'],
            priority: 1,
            rolesAllowed: [''],
            text: 'Heather',
            url: '/heather',
        },
        {
            iconHint: 'faGamepad',
            items: ['test', 'games'],
            priority: 2,
            rolesAllowed: [''],
            text: 'Adam',
            url: '/adam',
        },
        {
            iconHint: 'faDog',
            items: ['collar', 'colour'],
            priority: 4,
            rolesAllowed: [''],
            text: 'Jessie',
            url: '/jessie',
        },
    ];
    const tenant = 'test';
    test('should sort menus by priority and save into FireStore', async () => {
        const result = await updateMenu(testMenu, tenant);
        expect(result).toEqual(expectedMenu);
    });
});
