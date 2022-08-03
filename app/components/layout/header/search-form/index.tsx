import { FC } from 'react';
import { HiOutlineSearch } from "react-icons/hi";

import styles from './Search.module.scss';

type Props = {

};

export const SearchForm: FC = (props: Props) => {
    return (
        <form className='w-3/5 mx-auto flex' action="">
            <input 
                type="text" 
                className='p-2 border-x border-y border-gl w-full outline-none px-2 shadow-inner' 
                placeholder='Введите запрос'
            />
            <button className={styles.search_btn} type='submit'>
                <HiOutlineSearch className={styles.search_btn_icon} />
            </button>
        </form>
    );
};

