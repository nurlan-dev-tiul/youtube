import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { HiOutlineMenuAlt1} from "react-icons/hi";
import { RightMenu } from './right-menu';
import { SearchForm } from './search-form';

type HeaderTypesProps = {
    handleSidebar: () => void;
};

export const Header: FC<HeaderTypesProps> = ({handleSidebar}) => {
    return (
        <header className='flex items-center justify-between py-3 px-7 fixed top-0 left-0 z-50 w-full bg-white'>
            <div className='flex items-center'>
                <HiOutlineMenuAlt1 className='text-3xl mr-4 cursor-pointer' onClick={handleSidebar}/>
                <Link href='/'>
                    <a className='flex items-center text-2xl font-semibold text-black'>
                        <Image src='/img/logo.png' width={100} height={23}/>
                    </a>
                </Link>
            </div>

            <div className='flex-1'>
                <SearchForm />
            </div>
            <div>
                <RightMenu />
            </div>
        </header>
    );
};