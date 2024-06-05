import { useContext, useState, createContext, FC, ReactNode } from "react";
import { User } from "../models/user";

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>({user: null, setUser: () => {}});

export const useUserContext = () => useContext(UserContext)
