import Image from 'next/image';
import { FC } from 'react';
import { HiOutlineUserCircle, HiOutlineSun, HiOutlineVideoCamera } from 'react-icons/hi';

import styles from './RightMenu.module.scss';

type Props = {};

export const RightMenu: FC = (props: Props) => {
    return (
        <div className='flex items-center'>
            <HiOutlineSun className='text-yellow text-2xl mr-5 cursor-pointer' />
            {/* <button className={styles.auth_btn}>
                <HiOutlineUserCircle className={styles.auth_btn_icon} />
                Войти
            </button> */}
            <HiOutlineVideoCamera className='text-gray-500 text-2xl mr-5 cursor-pointer' />
            <div className={styles.user_box}>
                <Image className={styles.user_img} src='/img/user.png' width={35} height={35} />
            </div>
        </div>
    );
};
