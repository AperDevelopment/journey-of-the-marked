import React, {useState} from 'react';
import { usePathname } from 'next/navigation'
import Link from './Link';
import { useUserContext } from '../contexts/userContext';
import Button from './Button';

const Header: React.FC = () => {
    const path = usePathname();

    const from = (path === '/') ? '' : ('?from=' + path);

    const { user, setUser } = useUserContext();

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        setUser(null);
    };

    const handleOver = () => {
        setIsMenuVisible(true);
        console.log('caca')
    };

    const handleOut = () => {
        setIsMenuVisible(false);
    };

    return (
        <header className='flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900'>
            <h1 className='text-xl'>
                <a href='/'>Journey of the Marked</a>
            </h1>
            {user ? (
                <div className='relative' onMouseOver={handleOver} onMouseOut={handleOut}>
                    <a href={'user/' + user.name}>Bonjour {user.name}!</a>
                    <div className={'absolute top-0 right-0 pt-[25%] w-full' + (isMenuVisible ? '' : ' invisible')}>
                        <div className='flex flex-col w-fit min-w-full h-fit p-1.5 bg-gray-300 dark:bg-gray-800 rounded-lg text-left'>
                            <a href={'user/' + user.name}>Profile</a>
                            <a href='#' onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='space-x-3'>
                    <Link href={'/login' + from}>Login</Link>
                    <Link href={'/register' + from}>Register</Link>
                </div>
            )}
        </header>
    );
};

export default Header;