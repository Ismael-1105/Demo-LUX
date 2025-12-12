import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, IconButton, Box, useScrollTrigger, Slide, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Servicios', href: '#servicios' },
        { label: 'Únete', href: '#equipo' },
        { label: 'Instagram', href: '#instagram' },
    ];

    const drawer = (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default' }}>
            <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 20, right: 20 }}>
                <CloseIcon />
            </IconButton>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} button component="a" href={item.href} onClick={handleDrawerToggle} sx={{ textAlign: 'center', mb: 2 }}>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{ variant: 'h4', fontFamily: 'Playfair Display' }}
                        />
                    </ListItem>
                ))}
                <ListItem button component="a" href="#contacto" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <ListItemText
                        primary="Contacto"
                        primaryTypographyProps={{ variant: 'h4', fontFamily: 'Playfair Display' }}
                    />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            color="transparent"
            sx={{
                bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease',
                py: scrolled ? 1 : 2
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="a" href="#" sx={{ textDecoration: 'none', color: 'text.primary', fontWeight: 700, letterSpacing: 2 }}>
                        LUX
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                href={item.href}
                                sx={{
                                    fontSize: '0.875rem',
                                    letterSpacing: '0.1em',
                                    '&:hover': { color: 'text.secondary' }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button variant="contained" color="primary" href="#contacto">
                            Contacto
                        </Button>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', height: '100%' },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
