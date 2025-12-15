import React from 'react';
import { Box, Container, Typography, Stack, Link, Divider, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'common.white', pt: 10, pb: 4, position: 'relative' }}>
            {/* Back to Top Button */}
            <IconButton
                onClick={scrollToTop}
                sx={{
                    position: 'absolute',
                    top: -28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    width: 56,
                    height: 56,
                    boxShadow: 4,
                    '&:hover': {
                        bgcolor: 'primary.light',
                        transform: 'translateX(-50%) translateY(-4px)',
                        boxShadow: 8,
                    },
                    transition: 'all 0.3s ease',
                }}
            >
                <KeyboardArrowUpIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ mb: 6 }}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" sx={{ mb: 2, letterSpacing: 3, fontWeight: 700 }}>
                            LUX
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400', mb: 3, lineHeight: 1.8 }}>
                            Transformando marcas con creatividad y estrategia. Somos tu socio en el viaje hacia la excelencia digital.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {[
                                { icon: InstagramIcon, href: '#', label: 'Instagram' },
                                { icon: FacebookIcon, href: '#', label: 'Facebook' }
                            ].map((social, index) => {
                                const SocialIcon = social.icon;
                                return (
                                    <IconButton
                                        key={index}
                                        href={social.href}
                                        sx={{
                                            color: 'common.white',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                            '&:hover': {
                                                bgcolor: 'common.white',
                                                color: 'primary.main',
                                                transform: 'translateY(-4px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <SocialIcon />
                                    </IconButton>
                                );
                            })}
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, fontSize: '1.1rem' }}>
                            Enlaces Rápidos
                        </Typography>
                        <Stack spacing={2}>
                            {[
                                { label: 'Servicios', href: '#servicios' },
                                { label: 'Tienda', href: '/tienda' },
                                { label: 'Únete al Equipo', href: '#equipo' },
                                { label: 'Contacto', href: '#contacto' }
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: 'grey.400',
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        '&:hover': {
                                            color: 'common.white',
                                            transform: 'translateX(8px)',
                                        }
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, fontSize: '1.1rem' }}>
                            Contáctanos
                        </Typography>
                        <Stack spacing={2}>
                            <Box>
                                <Typography variant="body2" sx={{ color: 'grey.500', mb: 0.5, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Email
                                </Typography>
                                <Link
                                    href="mailto:luxagenciademktg@gmail.com"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: 'grey.400',
                                        fontSize: '0.95rem',
                                        '&:hover': { color: 'common.white' },
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    luxagenciademktg@gmail.com
                                </Link>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ color: 'grey.500', mb: 0.5, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Teléfono
                                </Typography>
                                <Link
                                    href="tel:+593998329028"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: 'grey.400',
                                        fontSize: '0.95rem',
                                        '&:hover': { color: 'common.white' },
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    (+593) 99 832 9028
                                </Link>
                            </Box>
                            <Box>
                                <Typography variant="body2" sx={{ color: 'grey.500', mb: 0.5, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    Ubicación
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'grey.400', fontSize: '0.95rem' }}>
                                    Loja – Ecuador
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'grey.500', fontSize: '0.875rem' }}>
                        Copyright © {new Date().getFullYear()} LUX. Todos los derechos reservados.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.600', fontSize: '0.75rem', mt: 1 }}>
                        Diseñado y desarrollado en Ecuador
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
