'use client'

import React, { useState } from 'react';
import { useUserContext } from '../contexts/userContext';

const LoginPage: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const { setUser } = useUserContext();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRemember(e.target.checked);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password })
        });

        if (res.ok) {
            const data = await res.json();
            setUser(data);
            if (remember) {
                localStorage.setItem('user', JSON.stringify(data));
            } else {
                sessionStorage.setItem('user', JSON.stringify(data));
            }
            const urlParams = new URLSearchParams(window.location.search);
            const from = urlParams.get('from');
            if (from) {
                window.location.href = from;
            } else {
                window.location.href = '/';
            }
        } else {
            console.error('Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <form onSubmit={handleSubmit} className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom :</label>
                    <input type="text" id="name" onChange={handleNameChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ton nom" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe :</label>
                    <input type="password" id="password" onChange={handlePasswordChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ton mot de passe" required />
                </div>
                <div className="mb-5 space-x-2">
                    <label htmlFor="remember" className="text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    <input id="remember" type="checkbox" onChange={handleRememberChange} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>


    );
};

export default LoginPage;