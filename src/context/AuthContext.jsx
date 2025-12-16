import React, { createContext, useContext, useState, useEffect } from 'react';

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

    useEffect(() => {
        // Restore user from localStorage on mount
        const savedUser = localStorage.getItem('luxUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (email, password) => {
        // Simulate admin login with credentials
        let mockUser = null;
        let isAdmin = false;

        // Credenciales de admin simuladas
        if (email === 'admin@lux.com' && password === 'admin123') {
            isAdmin = true;
            mockUser = {
                id: 999,
                name: 'Administrador LUX',
                email: email,
                avatar: null,
                role: 'admin',
                isAdmin: true
            };
        } else {
            // Usuario regular
            mockUser = {
                id: 1,
                name: 'Usuario Demo',
                email: email,
                avatar: null,
                role: 'user',
                isAdmin: false
            };
        }

        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('luxUser', JSON.stringify(mockUser));

        return { success: true, user: mockUser, isAdmin };
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
            avatar: null,
            role: 'user',
            isAdmin: false
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
        register,
        isAdmin: user?.isAdmin || false
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
