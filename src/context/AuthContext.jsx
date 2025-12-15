import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {
        // Simulate login (frontend only)
        const mockUser = {
            id: 1,
            name: 'Usuario Demo',
            email: email,
            avatar: null
        };

        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('luxUser', JSON.stringify(mockUser));

        return { success: true, user: mockUser };
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('luxUser');
    };

    const register = (userData) => {
        // Simulate registration (frontend only)
        const newUser = {
            id: Date.now(),
            ...userData,
            avatar: null
        };

        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('luxUser', JSON.stringify(newUser));

        return { success: true, user: newUser };
    };

    const value = {
        user,
        isAuthenticated,
        login,
        logout,
        register
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
