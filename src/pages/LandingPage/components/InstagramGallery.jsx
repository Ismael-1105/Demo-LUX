import React, { useRef } from 'react';
import { Box, Container, Typography, IconButton, Button, Stack } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';

const images = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
];

const InstagramGallery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 320;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box component="section" id="instagram" sx={{ py: 12, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'text.secondary',
                            letterSpacing: '0.2em',
                            fontWeight: 600,
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        INSTAGRAM
                    </Typography>
                    <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
                        Explora el Mundo del Lujo
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}>
                        Descubre las últimas tendencias, experiencias exclusivas y productos de alta gama en nuestro feed de Instagram.
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative', px: { xs: 0, md: 4 } }}>
                    <IconButton
                        onClick={() => scroll('left')}
                        sx={{
                            position: 'absolute',
                            left: { xs: -20, md: -20 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 3,
                            width: 48,
                            height: 48,
                            display: { xs: 'none', md: 'flex' },
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'common.white',
                                transform: 'translateY(-50%) scale(1.1)',
                                boxShadow: 6,
                            }
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    <Box
                        ref={scrollRef}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            pb: 2,
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollBehavior: 'smooth'
                        }}
                    >
                        {images.map((img, index) => (
                            <Box
                                key={index}
                                sx={{
                                    minWidth: 300,
                                    height: 300,
                                    position: 'relative',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    boxShadow: 2,
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        boxShadow: 8,
                                        transform: 'scale(1.03)',
                                        '& .overlay': { opacity: 1 },
                                        '& img': { transform: 'scale(1.15)' },
                                        '& .instagram-icon': {
                                            transform: 'scale(1.2) rotate(15deg)',
                                        }
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={img}
                                    alt={`Instagram ${index + 1}`}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(103,126,234,0.8) 0%, rgba(118,75,162,0.8) 100%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.4s ease',
                                        gap: 2,
                                    }}
                                >
                                    <InstagramIcon
                                        className="instagram-icon"
                                        sx={{
                                            fontSize: 48,
                                            color: 'white',
                                            transition: 'all 0.4s ease',
                                        }}
                                    />
                                    <Typography
                                        variant="button"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                        }}
                                    >
                                        Ver en Instagram
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <IconButton
                        onClick={() => scroll('right')}
                        sx={{
                            position: 'absolute',
                            right: { xs: -20, md: -20 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 3,
                            width: 48,
                            height: 48,
                            display: { xs: 'none', md: 'flex' },
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'common.white',
                                transform: 'translateY(-50%) scale(1.1)',
                                boxShadow: 6,
                            }
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Stack direction="row" justifyContent="center" mt={8}>
                    <Button
                        variant="contained"
                        startIcon={<InstagramIcon />}
                        href="https://instagram.com"
                        target="_blank"
                        size="large"
                        sx={{
                            px: 5,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 600,
                        }}
                    >
                        Síguenos en Instagram
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default InstagramGallery;
