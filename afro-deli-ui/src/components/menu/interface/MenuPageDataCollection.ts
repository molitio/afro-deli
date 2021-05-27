import { MenuPageData } from './MenuPage';

export interface MenuPageDataCollection {
    items: {
        selectedPage: string;
        menuPages: Map<string, MenuPageData>;
    };
}
