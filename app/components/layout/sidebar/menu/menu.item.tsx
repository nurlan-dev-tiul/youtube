import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { FC } from 'react';
import { useAuth } from '@assets/useAuth';
import { useRouter } from 'next/router';
import { IMenuItem } from './menu.interface';

import styles from './Menu.module.scss';

type MenuItemProps = {
    item: IMenuItem;
}

export const MenuItem: FC<MenuItemProps> = ({item}) => {

    const { user } = useAuth();

    //! Для активного меню
    const { asPath } = useRouter();
    const isActiveMenu = asPath === item.link

    if(item.link === 'my-channel'){
        if(!user) return null;
        else item.link = `/c/${user?.id}`
    }

    return (
        <li className='block mb-10 last:mb-0S'>
            <Link href={item.link}>
                <a className={cn(styles.link_item, asPath === item.link ? styles.active : '')}>
                    <span className={item.image ? styles.image : ''}>
                        {item.icon && <item.icon />}
                        {item.image && <Image src={item.image} width={40} height={40} alt={item.title} />}
                    </span>
                    <b>{item.title}</b>
                </a>
            </Link>
        </li>
    );
};