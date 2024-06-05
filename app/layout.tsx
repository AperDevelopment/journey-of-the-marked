'use client'

import "./globals.css";
import { UserContext } from "./contexts/userContext";
import { useState, useEffect } from "react";
import { User } from "./models/user";
import Header from "./composants/header";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (user) { 
            return;
        }
        let storage = localStorage.getItem('user');
        if (storage) {
            setUser(JSON.parse(storage) as User);
        }
        if (user) {
            return;
        }
        storage = sessionStorage.getItem('user');
        if (storage) {
            setUser(JSON.parse(storage) as User);
        }
    }, [user]);
    return (
        <html lang="fr" className="ltr">
            <UserContext.Provider value={{user, setUser}}>
                <body>
                    <Header/>
                    {children}
                </body>
            </UserContext.Provider>
        </html>
    );
}
