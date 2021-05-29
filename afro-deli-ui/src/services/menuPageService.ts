import { MenuPageData } from '../components/menu/interface/MenuPage';
import { MenuPageDataCollection } from '../components/menu/interface/MenuPageDataCollection';
import greenHand from '../images/greenHand.jpg';
import pagesData from '../data/pagesData.json';

const imageUrlTest = greenHand;

const dataSourceMock = pagesData.data;
console.log(dataSourceMock);

export const menuPageCollection: MenuPageDataCollection = {
    items: {
        selectedPage: 'mealPage1',
        menuPages: new Map<string, MenuPageData>([
            [
                'mealPage1',
                {
                    pageName: 'menuPage1',
                    menuItems: [
                        {
                            data: {
                                id: 'null0',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                        {
                            data: {
                                id: 'null0',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                    ],
                },
            ],
            [
                'mealPage2',
                {
                    pageName: 'menuPage2',
                    menuItems: [
                        {
                            data: {
                                id: 'null1',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                        {
                            data: {
                                id: 'null2',
                                name: 'meal',
                                description: 'tasty',
                                imageUrl: imageUrlTest,
                                price: 12,
                                currency: 'EUR',
                            },
                        },
                    ],
                },
            ],
        ]),
    },
};
