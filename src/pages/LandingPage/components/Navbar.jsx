import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Badge,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useCart } from '../../../context/CartContext';
import CartDrawer from '../../../components/ShoppingCart/CartDrawer';
import KitModal from '../../../components/KitModal';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = [
    { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { label: 'Tienda', href: '/tienda', id: null },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Convenios', href: '#convenios', id: 'convenios' },
    { label: 'Únete', href: '#equipo', id: 'equipo' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [openKit, setOpenKit] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const { getTotalItems } = useCart();
    const navigate = useNavigate();
    const theme = useTheme();
    const location = useLocation();
    const pathname = location.pathname;

    /* ---------------- Scroll listener ---------------- */
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const textColor = scrollY < 20 ? '#fff' : '#111';

    /* ---------------- Drawer ---------------- */
    const drawer = (
        <Box
            sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #000000 0%, #f9f9f9 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 8
            }}
        >
            <IconButton
                onClick={() => setMobileOpen(false)}
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: theme.palette.primary.main
                }}
            >
                <CloseIcon />
            </IconButton>

            <List sx={{ width: '100%' }}>
                {sections.map(item => (
                    <ListItem
                        key={item.label}
                        button
                        onClick={() => {
                            setMobileOpen(false);
                            if (item.label === 'Únete') {
                                setOpenKit(true);
                                return;
                            }
                            if (item.href && item.href.startsWith('/')) {
                                navigate(item.href);
                                return;
                            }
                            if (item.id) {
                                navigate(`/#${item.id}`);
                            }
                        }}
                        sx={{
                            textAlign: 'center',
                            mb: 2.5,
                            mx: 'auto',
                            width: 'fit-content',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            transition: 'opacity 0.3s ease',
                            '&:hover': {
                                opacity: 0.7
                            }
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                variant: 'h5',
                                fontWeight: 600,
                                sx: {
                                    color: '#111'
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                color: textColor,
                background: scrollY < 20
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))'
                    : 'rgba(255,255,255,0.88)',
                backdropFilter: scrollY < 20 ? 'none' : 'blur(14px)',
                WebkitBackdropFilter: scrollY < 20 ? 'none' : 'blur(14px)',
                borderBottom: scrollY < 20 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: scrollY > 20 ? '0 8px 24px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.35s ease'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
                    {/* Logo */}
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Box
                            component="img"
                            src="/favicon.ico"
                            alt="LUX"
                            sx={{
                                width: 42,
                                height: 42,
                                filter: scrollY < 20
                                    ? 'invert(1) brightness(1.2)'
                                    : 'none'
                            }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {sections.map(item => (
                            <Button
                                key={item.label}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.label === 'Únete') {
                                        setOpenKit(true);
                                        return;
                                    }
                                    if (item.href && item.href.startsWith('/')) {
                                        navigate(item.href);
                                        return;
                                    }
                                    if (item.id) {
                                        navigate(`/#${item.id}`);
                                    }
                                }}
                                sx={{
                                    color: textColor,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    fontSize: '0.95rem',
                                    px: 2.5,
                                    py: 1,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        color: textColor,
                                        opacity: 0.75
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        {/* Cart */}
                        {pathname === '/tienda' && (
                            <IconButton
                                onClick={() => setCartOpen(true)}
                                sx={{
                                    color: 'inherit',
                                    ml: 1,
                                    '&:hover': {
                                        color: 'inherit',
                                        opacity: 0.75
                                    }
                                }}
                            >
                                <Badge badgeContent={getTotalItems()} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        )}

                        {/* Login */}
                        <Button
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            onClick={() => navigate('/login')}
                            sx={{
                                ml: 2,
                                color: textColor,
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': {
                                    color: textColor,
                                    borderColor: 'transparent',
                                    bgcolor: 'rgba(255,255,255,0.08)'
                                }
                            }}
                        >
                            Ingresa
                        </Button>
                    </Box>

                    {/* Mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        {pathname === '/tienda' && (
                            <IconButton
                                onClick={() => setCartOpen(true)}
                                sx={{
                                    color: textColor,
                                    '&:hover': { opacity: 0.75 }
                                }}
                            >
                                <Badge badgeContent={getTotalItems()} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        )}

                        <IconButton
                            onClick={() => setMobileOpen(true)}
                            sx={{
                                color: textColor,
                                '&:hover': { opacity: 0.75 }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                anchor="top"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {drawer}
            </Drawer>

            <KitModal open={openKit} onClose={() => setOpenKit(false)} />
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </AppBar>
    );
};

export default Navbar;
