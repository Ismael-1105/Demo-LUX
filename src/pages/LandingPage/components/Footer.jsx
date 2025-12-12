import React from 'react';
import { Box, Container, Typography, Stack, Link, Divider } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'common.white', py: 8 }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, mb: 4, gap: 4, textAlign: { xs: 'center', md: 'left' } }}>
                    <Box>
                        <Typography variant="h4" sx={{ mb: 1, letterSpacing: 2 }}>LUX</Typography>
                        <Typography variant="body2" sx={{ color: 'grey.500' }}>
                            Transformando marcas con creatividad y estrategia.
                        </Typography>
                    </Box>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        <Link href="#servicios" color="inherit" underline="none" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.9rem', '&:hover': { color: 'grey.300' } }}>Servicios</Link>
                        <Link href="#equipo" color="inherit" underline="none" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.9rem', '&:hover': { color: 'grey.300' } }}>Únete</Link>
                        <Link href="#instagram" color="inherit" underline="none" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.9rem', '&:hover': { color: 'grey.300' } }}>Instagram</Link>
                    </Stack>
                </Box>
                <Divider sx={{ borderColor: 'grey.800', mb: 4 }} />
                <Typography variant="body2" align="center" sx={{ color: 'grey.600' }}>
                    Copyright © 2025 LUX. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
