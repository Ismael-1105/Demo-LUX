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
    const [activeSection, setActiveSection] = useState(null);

    const { getTotalItems } = useCart();
    const navigate = useNavigate();

    const theme = useTheme();
    const location = useLocation();
    const pathname = location.pathname;

    /* ---------------- Scroll listener (blur dinámico) ---------------- */
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const blur = Math.min(18, scrollY / 10);
    const opacity = Math.min(0.9, 0.25 + scrollY / 400);

    /* ---------------- Active section observer & Hash handling ---------------- */
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(s => {
            if (s.id) {
                const el = document.getElementById(s.id);
                if (el) observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Handle hash navigation on route change
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash && pathname === '/') {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSection(hash);
                }
            }, 100);
        }
    }, [pathname]);

    const textColor = '#111';

    /* ---------------- Drawer ---------------- */
    const drawer = (
        <Box
            sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
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
                    color: theme.palette.primary.main,
                    '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.05)'
                    }
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
                            bgcolor: activeSection === item.id && item.id ? `${theme.palette.primary.main}15` : 'transparent',
                            borderRadius: 2,
                            borderLeft: activeSection === item.id && item.id ? `4px solid ${theme.palette.primary.main}` : 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                                bgcolor: `${theme.palette.primary.main}10`
                            }
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                variant: 'h5',
                                fontWeight: activeSection === item.id ? 700 : 600,
                                sx: {
                                    color: activeSection === item.id && item.id ? theme.palette.primary.main : '#111',
                                    transition: 'all 0.3s ease'
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
                bgcolor: `rgba(255,255,255,${opacity})`,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                borderBottom: `1px solid rgba(0,0,0,${Math.min(0.08, scrollY / 2000)})`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.08)' : 'none'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
                    {/* Logo (favicon) */}
                    <Box
                        component="a"
                        href="./"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            textDecoration: 'none',
                            fontWeight: 800,
                            color: 'inherit',
                            fontSize: '1.3rem',
                            letterSpacing: '-0.5px',
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src="/favicon.ico"
                            alt="LUX"
                            sx={{
                                width: 42,
                                height: 42,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'rotate(-5deg)'
                                }
                            }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {sections.map(item => {
                            const isActive = activeSection === item.id;

                            return (
                                <Button
                                    key={item.label}
                                    href={item.href}
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
                                        color: isActive ? theme.palette.primary.main : '#111',
                                        position: 'relative',
                                        fontWeight: isActive ? 700 : 600,
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        px: 2.5,
                                        py: 1,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            transform: 'translateY(-2px)'
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: '50%',
                                            bottom: -8,
                                            width: isActive ? '100%' : 0,
                                            height: 3,
                                            backgroundColor: theme.palette.primary.main,
                                            transform: 'translateX(-50%)',
                                            transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                            borderRadius: '2px'
                                        }
                                    }}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}

                        {/* Cart: mostrar solo en /tienda */}
                        {pathname === '/tienda' && (
                            <IconButton
                                onClick={() => setCartOpen(true)}
                                sx={{
                                    color: 'inherit',
                                    ml: 1,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: theme.palette.primary.main,
                                        transform: 'scale(1.1)'
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
                                px: 2.5,
                                py: 1,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    borderColor: 'transparent',
                                    color: theme.palette.primary.main,
                                    bgcolor: `${theme.palette.primary.main}08`,
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 8px 20px ${theme.palette.primary.main}20`
                                }
                            }}
                        >
                            Ingresa
                        </Button>
                    </Box>

                    {/* Mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
                        {pathname === '/tienda' && (
                            <IconButton
                                onClick={() => setCartOpen(true)}
                                sx={{
                                    color: textColor,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: theme.palette.primary.main
                                    }
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
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: theme.palette.primary.main
                                }
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
