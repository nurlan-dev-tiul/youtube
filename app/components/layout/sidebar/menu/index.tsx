import { FC } from 'react';
import { MenuItem } from './menu.item';
import { IMenuItem } from './menu.interface';
import { Line } from 'components/ui/Line';
import styles from './Menu.module.scss';
import clsx from 'clsx';


type MenuTypeProps = {
    title?: string;
    items: IMenuItem[];
    className?: string
}

export const Menu: FC<MenuTypeProps> = ({title, items, className}) => {
    return (
        <nav className={clsx(className, styles.nav)}>
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