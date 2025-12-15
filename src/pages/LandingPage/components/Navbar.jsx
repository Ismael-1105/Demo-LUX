import React, { useState, useEffect, useMemo } from 'react';
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
  useTheme,
  useMediaQuery
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
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
  { label: 'Convenios', href: '#convenios', id: 'convenios' },
  { label: 'Tienda', href: '/tienda', id: null },
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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

  /* ---------------- Active section observer ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(s => {
      if (s.id) {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const textColor = '#111';

  /* ---------------- Drawer ---------------- */
  const drawer = (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <IconButton onClick={() => setMobileOpen(false)} sx={{ position: 'absolute', top: 20, right: 20 }}>
        <CloseIcon />
      </IconButton>

      <List>
        {sections.map(item => (
          <ListItem
            key={item.label}
            button
            onClick={(e) => {
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
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            sx={{ textAlign: 'center', mb: 2 }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ variant: 'h4', fontWeight: 600 }}
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
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        transition: 'background-color .3s ease, backdrop-filter .3s ease, color .3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo (favicon) */}
          <Box
            component="a"
            href="./"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              fontWeight: 700,
              color: 'inherit'
            }}
          >
            <Box component="img" src="/favicon.ico" alt="LUX" sx={{ width: 36, height: 36 }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  sx={{
                    color: 'inherit',
                    position: 'relative',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -6,
                      width: isActive ? '100%' : 0,
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width .3s ease'
                    }
                  }}
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Cart: mostrar solo en /tienda */}
            {pathname === '/tienda' && (
              <IconButton onClick={() => setCartOpen(true)} sx={{ color: 'inherit' }}>
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
                color: textColor,
                borderColor: textColor,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main
                }
              }}
            >
              Ingresa
            </Button>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            {pathname === '/tienda' && (
              <IconButton onClick={() => setCartOpen(true)} sx={{ color: textColor }}>
                <Badge badgeContent={getTotalItems()} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}

            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: textColor }}>
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
