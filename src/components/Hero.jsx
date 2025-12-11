import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Stack, keyframes } from '@mui/material';

// Animations
const zoomIn = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                color: 'common.white',
            }}
        >
            {/* Background Image with Zoom Effect */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop)', // Luxury Interior / Abstract
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: `${zoomIn} 20s infinite alternate ease-in-out`,
            }} />

            {/* Overlay for readability */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            fontSize: '1rem',
                            letterSpacing: '0.3em',
                            fontWeight: 600,
                            mb: 2,
                            opacity: 0,
                            animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                        }}
                    >
                        LUX
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', md: '5.5rem' },
                            lineHeight: 1.1,
                            fontWeight: 600,
                            opacity: 0,
                            animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                            animationDelay: '0.2s',
                            textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        Es hora de cambiar
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '3.5rem', md: '5.5rem' },
                            lineHeight: 1.1,
                            fontWeight: 600,
                            fontStyle: 'italic',
                            opacity: 0,
                            animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                            animationDelay: '0.3s',
                            textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        las reglas...
                    </Typography>
                </Box>

                <Typography
                    variant="h5"
                    sx={{
                        color: 'grey.300',
                        mb: 6,
                        maxWidth: 500,
                        fontWeight: 300,
                        opacity: 0,
                        animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                        animationDelay: '0.5s'
                    }}
                >
                    Agencia de Marketing y Publicidad
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    sx={{
                        opacity: 0,
                        animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                        animationDelay: '0.7s'
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        href="#servicios"
                        sx={{
                            bgcolor: 'common.white',
                            color: 'common.black',
                            '&:hover': { bgcolor: 'grey.200' }
                        }}
                    >
                        ¡Ven y conócenos!
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        href="#equipo"
                        sx={{
                            borderColor: 'common.white',
                            color: 'common.white',
                            '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.1)' }
                        }}
                    >
                        Sé parte de Ángeles
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
