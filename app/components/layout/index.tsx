import Head from 'next/head';
import {FC, PropsWithChildren, useState, createContext} from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

import styles from './Layout.module.scss';
import clsx from 'clsx';

type LayoutTypes = {
    title: string
}

//! Контекст 
export const MenuVisableContext = createContext(false);

export const Layout: FC<PropsWithChildren<LayoutTypes>> = ({title, children}) => {

    const [visable, setVisable] = useState(false);

    const handleVisableSidebar = () => {
        setVisable(!visable);
    }

    const onClose = () => {
        setVisable(false)
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header handleSidebar={handleVisableSidebar} />
            <main className='flex flex-wrap'>
                <MenuVisableContext.Provider value={visable}>
                    <Sidebar visable={visable} onClose={onClose} />
                        <section className={clsx(styles.content, {
                            [styles.active]: visable
                        })}>
                            <div className='pl-6 pr-5'>
                                {children}
                            </div>
                        </section>
                </MenuVisableContext.Provider>
            </main>
        </>
    )
}

