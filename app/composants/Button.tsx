import { MouseEventHandler } from "react";

interface LinkProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

const Button = ({ onClick, children } : LinkProps) => {
    return(
        <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            onClick={onClick}
        >

            {children}
        </button>
)};

export default Button;