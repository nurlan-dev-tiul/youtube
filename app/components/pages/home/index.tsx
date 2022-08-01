import { FC } from 'react';
import { Layout } from 'components/layout';
import { Discover } from './discover';
import { Catalog } from 'components/catalog';

import styles from './Home.module.scss';

type Props = {};

export const Home: FC = (props: Props) => {
    return (
        <Layout title='Youtube'>
            <Discover />
            <Catalog />
        </Layout>
    );
};