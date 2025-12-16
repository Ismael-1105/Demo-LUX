import React from 'react';
import { Drawer, Box, Avatar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';

const Sidebar = ({ activeSection, setActiveSection, user, onLogout }) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 280,
                '& .MuiDrawer-paper': {
                    width: 280,
                    background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)',
                    color: '#fff',
                    borderRight: '1px solid rgba(168, 85, 247, 0.15)',
                    boxShadow: '4px 0 24px rgba(0, 0, 0, 0.5)'
                }
            }}
        >
            <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', width: 44, height: 44, fontWeight: 700, fontSize: '1.1rem' }}>A</Avatar>
                <Box>
                    <Typography variant="subtitle2" fontWeight={700} sx={{ fontSize: '1rem' }}>Admin Panel</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>LUX Agency</Typography>
                </Box>
            </Box>

            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />

            <List sx={{ px: 1 }}>
                {[
                    { id: 'dashboard', label: 'Dashboard', icon: 'Dashboard' },
                    { id: 'products', label: 'Productos', icon: 'Products' },
                    { id: 'orders', label: 'Pedidos', icon: 'Orders' },
                    { id: 'users', label: 'Usuarios', icon: 'Users' },
                    { id: 'settings', label: 'Configuración', icon: 'Settings' }
                ].map(item => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            onClick={() => setActiveSection(item.id)}
                            sx={{
                                bgcolor: activeSection === item.id ? 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' : 'transparent',
                                borderRadius: 2,
                                mb: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': { 
                                    bgcolor: activeSection === item.id ? 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' : 'rgba(168, 85, 247, 0.1)',
                                    transform: 'translateX(4px)'
                                }
                            }}
                        >
                            <ListItemIcon sx={{ color: activeSection === item.id ? '#fff' : 'rgba(255, 255, 255, 0.7)', minWidth: 40 }} />
                            <ListItemText 
                                primary={item.label} 
                                primaryTypographyProps={{
                                    fontWeight: activeSection === item.id ? 600 : 400,
                                    fontSize: '0.95rem'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />

            <Box sx={{ px: 2, mt: 'auto', pb: 3 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<LogoutIcon />}
                    onClick={onLogout}
                    sx={{ 
                        color: '#fff', 
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 2,
                        py: 1.2,
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                            bgcolor: 'rgba(239, 68, 68, 0.1)', 
                            borderColor: '#ef4444',
                            color: '#ef4444'
                        } 
                    }}
                >
                    Cerrar Sesión
                </Button>
            </Box>
        </Drawer>
    );
};

export default Sidebar;