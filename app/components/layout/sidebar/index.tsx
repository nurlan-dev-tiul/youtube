import Link from 'next/link';
import { FC } from 'react';
import { Menu } from './menu';
import { menu } from './menu/menu.data';

type Props = {};

export const Sidebar: FC = () => {
    return (
        <aside className='py-5 px-7'>
            <Link href='/'>
                <a className='text-2xl font-semibold text-black'>Youtube</a>
            </Link>
            <Menu items={menu}/>
        </aside>
    );
};
