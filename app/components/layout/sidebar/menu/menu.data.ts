import { IMenuItem } from "./menu.interface";
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi';

export const menu: IMenuItem[] = [
    {
        title: 'Главная',
        icon: HiHome,
        link: '/'
    },
    {
        title: 'Популярные',
        icon: HiChartBar,
        link: '/popular'
    },
    {
        title: 'Мой канал',
        icon: HiStar,
        link: '/my-channel'
    },
    {
        title: 'Мои подписки',
        icon: HiCollection,
        link: '/subscription'
    },
]