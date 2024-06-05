import Link from 'next/link';

interface LinkProps {
    href: string;
    children: React.ReactNode;
};

const MyLink = ({ href, children } : LinkProps) => {
    return(
        <Link
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            href={href}
        >
            {children}
        </Link>
)};

export default MyLink;