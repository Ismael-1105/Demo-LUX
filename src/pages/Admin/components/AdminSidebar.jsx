import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, value: 'dashboard' },
    { text: 'Productos', icon: <InventoryIcon />, value: 'productos' },
    { text: 'Usuarios', icon: <PeopleIcon />, value: 'usuarios' }
];

export default function AdminSidebar({ activeSection, onSectionChange, onLogout, userName }) {
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Toggle Button for collapsed state */}
            {!open && (
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        position: 'fixed',
                        left: 16,
                        top: 16,
                        zIndex: 1200,
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        '&:hover': { bgcolor: 'background.paper' }
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open ? drawerWidth : 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? drawerWidth : 0,
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        bgcolor: 'background.paper',
                        borderRight: '1px solid',
                        borderColor: 'divider'
                    }
                }}
            >
                {/* Header */}
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" fontWeight={700}>
                        LUX Admin
                    </Typography>
                    <IconButton onClick={handleDrawerToggle} size="small">
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>

                <Divider />

                {/* User Info */}
                <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                        {userName}
                    </Typography>
                    <Typography variant="caption">Administrador</Typography>
                </Box>

                <Divider />

                {/* Menu Items */}
                <List sx={{ flexGrow: 1, pt: 2 }}>
                    {menuItems.map((item) => (
                        <ListItem key={item.value} disablePadding>
                            <ListItemButton
                                selected={activeSection === item.value}
                                onClick={() => onSectionChange(item.value)}
                                sx={{
                                    mx: 1,
                                    borderRadius: 1,
                                    '&.Mui-selected': {
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        '&:hover': {
                                            bgcolor: 'primary.dark'
                                        },
                                        '& .MuiListItemIcon-root': {
                                            color: 'primary.contrastText'
                                        }
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 40,
                                        color: activeSection === item.value ? 'primary.contrastText' : 'text.secondary'
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                {/* Logout */}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={onLogout}
                            sx={{
                                mx: 1,
                                mb: 1,
                                borderRadius: 1,
                                color: 'error.main',
                                '&:hover': {
                                    bgcolor: 'error.light',
                                    color: 'error.dark'
                                }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar Sesión" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

AdminSidebar.propTypes = {
    activeSection: PropTypes.string.isRequired,
    onSectionChange: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    userName: PropTypes.string
};
