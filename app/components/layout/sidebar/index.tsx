import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Menu } from './menu';
import { menu } from './menu/menu.data';
import styles from './Sidebar.module.scss';

type SidebarTypeProps = {
    visable: boolean;
    onClose: () => void;
};

export const Sidebar: FC<SidebarTypeProps> = ({visable, onClose}) => {
    return (
        <aside className={clsx(styles.sidebar, {
            [styles.active]: visable
        })}>
            <Menu items={menu}/>
        </aside>
    );
};
