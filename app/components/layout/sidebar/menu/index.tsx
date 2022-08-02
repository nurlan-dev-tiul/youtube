import { FC } from 'react';
import { MenuItem } from './menu.item';
import { IMenuItem } from './menu.interface';
import { Line } from 'components/ui/Line';

type MenuTypeProps = {
    title?: string;
    items: IMenuItem[];
}

export const Menu: FC<MenuTypeProps> = ({title, items}) => {
    return (
        <nav className='my-8'>
            <h3 className='text-gray-600 mb-7'>{title}</h3>
            <ul className='list-none'>
                {items.map((menuItem, index) => (
                    <MenuItem item={menuItem} key={index} />
                ))}
            </ul>
            <Line />
        </nav>
    )
}