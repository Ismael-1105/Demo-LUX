import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Stack, keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KitModal from '../../../components/KitModal';

// Animations
const zoomIn = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
`;

const titlePop = keyframes`
    from { transform: scale(0.99); }
    to { transform: scale(1); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-20px) translateX(10px); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const subtleZoom = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
`;

const Hero = () => {
    const [loaded, setLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [open, setOpen] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const animatedWords = ['cambiar', 'redefinir', 'reinventar'];

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setLoaded(true);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((i) => (i + 1) % animatedWords.length);
        }, 2800);
        return () => clearInterval(id);
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
            {/* Background Image with Parallax Effect */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '120%',
                zIndex: 0,
                backgroundImage: 'url(/img/361641144_1957378644643477_7457350275376776039_n.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: `${subtleZoom} 16s infinite alternate ease-in-out`,
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: 'transform 0.1s ease-out',
            }} />

            {/* Gradient Overlay (subtle) */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                background: 'rgba(0,0,0,0.45)'
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
                            background: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        LUX
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.6rem', md: '4rem' },
                            lineHeight: 1.05,
                            fontWeight: 700,
                            opacity: 0,
                            animation: loaded ? `${fadeUp} 0.7s cubic-bezier(0.22,1,0.36,1) forwards, ${titlePop} 0.9s ease forwards` : 'none',
                            animationDelay: '0.12s',
                            mb: 1,
                            transformOrigin: 'center'
                        }}
                    >
                        Es hora de{' '}
                        <Box
                            key={wordIndex}
                            component="span"
                            aria-live="polite"
                            sx={{
                                display: 'inline-block',
                                color: 'primary.light',
                                fontStyle: 'normal',
                                ml: 0.5,
                                animation: `${fadeUp} 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                            }}
                        >
                            {animatedWords[wordIndex]}
                        </Box>
                        <Box component="span" sx={{ display: 'block', fontSize: { xs: '1.6rem', md: '2rem' }, fontStyle: 'italic', fontWeight: 600, mt: 0.5 }}>
                            las reglas...
                        </Box>
                    </Typography>
                </Box>

                <Typography
                    variant="h5"
                    sx={{
                        color: 'grey.300',
                        mb: 6,
                        maxWidth: 600,
                        fontWeight: 300,
                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                        opacity: 0,
                        animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                        animationDelay: '0.5s'
                    }}
                >
                    Agencia de Marketing y Publicidad de Alto Impacto
                </Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{
                        opacity: 0,
                        animation: loaded ? `${fadeUp} 0.7s ease forwards` : 'none',
                        animationDelay: '0.6s'
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        href="#servicios"
                        sx={{
                            bgcolor: 'common.white',
                            color: 'common.black',
                            px: 4,
                            py: 1.5,
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.95)' }
                        }}
                    >
                        ¡Ven y conócenos!
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={handleOpen}
                        sx={{
                            borderColor: 'rgba(255,255,255,0.85)',
                            color: 'common.white',
                            px: 4,
                            py: 1.5,
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            borderWidth: '1.5px'
                        }}
                    >
                        Sé parte de Ángeles
                    </Button>
                </Stack>
            </Container>

            {/* Scroll Indicator */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                    opacity: 0,
                    animation: loaded ? `${fadeUp} 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards` : 'none',
                    animationDelay: '1s',
                    cursor: 'pointer',
                }}
                component="a"
                href="#servicios"
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: 'grey.400',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                    }}
                >
                    Descubre más
                </Typography>
                <KeyboardArrowDownIcon
                    sx={{
                        color: 'grey.400',
                        fontSize: '2rem',
                        animation: `${bounce} 2s ease-in-out infinite`,
                    }}
                />
            </Box>

            <KitModal open={open} onClose={handleClose} />
        </Box>
    );
};

export default Hero;
