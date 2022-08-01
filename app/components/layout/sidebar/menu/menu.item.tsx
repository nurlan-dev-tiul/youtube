import Link from 'next/link';
import Image from 'next/image';
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
    const { asPath } = useRouter();

    if(item.link === 'my-channel'){
        if(!user) return null;
        else item.link = `/c/${user?.id}`
    }

    return (
        <li>
            <Link href={item.link}>
                <a className={asPath === item.link ? styles.active : ''}>
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