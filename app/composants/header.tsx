import React from 'react';
import { usePathname } from 'next/navigation'
import Link from './Link';
import { useUserContext } from '../contexts/userContext';
import Button from './Button';

const Header: React.FC = () => {
    const path = usePathname();

    const from = (path === '/') ? '' : ('?from=' + path);

    const { user, setUser } = useUserContext();

    const handleLogout = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        setUser(null);
    };

    return (
        <header className='flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900'>
            <h1 className='text-xl'>
                <a href='/'>Journey of the Marked</a>
            </h1>

            <div>
                {user ? (
                    <div className='flex space-x-3 items-center'>
                        <p>Bonjour {user.name}!</p>
                        <Button onClick={handleLogout}>Logout</Button>
                    </div>
                ) : (
                    <div className='space-x-3'>
                        <Link href={'/login' + from}>Login</Link>
                        <Link href={'/register' + from}>Register</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;