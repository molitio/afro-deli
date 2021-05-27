import React from 'react';
import { MenuPageData } from './interface/MenuPage';
import { MenuPageDataCollection } from './interface/MenuPageDataCollection';
import { MenuItemComponent } from './MenuItemComponent';

export function MenuComponent({ items }: MenuPageDataCollection): JSX.Element {
    console.log(items);
    return (
        <div>
            {Array.from(items.menuPages).map((page) => (
                <div key={page[0]}>
                    <span>{page[1].pageName}</span>
                    <ul>
                        {page[1].menuItems.map((item) => (
                            <li key={item.data.id}>
                                <MenuItemComponent data={item.data} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/*             <ul>{itemHtml()}</ul> */}
        </div>
    );
}
