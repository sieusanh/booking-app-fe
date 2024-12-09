import { createContext } from 'react';


const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null
};

export const AuthContext = createContext(INITIAL_STATE);

const 
    