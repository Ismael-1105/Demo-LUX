import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Project imports
import Dashboard from './Dashboard';
import AdminSidebar from './components/AdminSidebar';
import { ConfigProvider } from './context/ConfigContext';

const AdminDashboard = () => {
    const { user, logout, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');

    // Redirigir si no es admin
    if (!isAdmin) {
        return (
            <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom color="error">
                    Acceso Denegado
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    Solo los administradores pueden acceder a esta sección.
                </Typography>
                <Button variant="contained" onClick={() => navigate('/')}>
                    Volver al Inicio
                </Button>
            </Container>
        );
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getSectionTitle = () => {
        switch (activeSection) {
            case 'dashboard':
                return 'Dashboard LUX';
            case 'productos':
                return 'Gestión de Productos';
            case 'usuarios':
                return 'Gestión de Usuarios';
            default:
                return 'Dashboard LUX';
        }
    };

    return (
        <ConfigProvider>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                {/* Sidebar */}
                <AdminSidebar
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                    onLogout={handleLogout}
                    userName={user?.name}
                />

                {/* Main Content */}
                <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 4 }}>
                    <Container maxWidth="xl">
                        {/* Header */}
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h3" fontWeight={700} gutterBottom>
                                {getSectionTitle()}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Bienvenido, {user?.name}
                            </Typography>
                        </Box>

                        {/* Content */}
                        {activeSection === 'dashboard' && <Dashboard />}

                        {activeSection === 'productos' && (
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    Productos
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Aquí podrás gestionar todos los productos de LUX.
                                </Typography>
                            </Box>
                        )}

                        {activeSection === 'usuarios' && (
                            <Box>
                                <Typography variant="h5" gutterBottom>
                                    Usuarios
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Aquí podrás gestionar todos los usuarios del sistema.
                                </Typography>
                            </Box>
                        )}
                    </Container>
                </Box>
            </Box>
        </ConfigProvider>
    );
};

export default AdminDashboard;
