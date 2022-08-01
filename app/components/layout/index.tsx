import Head from 'next/head';
import {FC, PropsWithChildren} from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';

import styles from './Layout.module.scss';

type LayoutTypes = {
    title: string
}

export const Layout: FC<PropsWithChildren<LayoutTypes>> = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className='flex flex-wrap'>
                <Sidebar />
                <section className={styles.content}>
                    <Header />
                    <div className='pl-6 pr-5'>
                        {children}
                    </div>
                </section>
            </main>
        </>
    )
}

