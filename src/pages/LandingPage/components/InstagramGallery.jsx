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
            const scrollAmount = 300;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box component="section" id="instagram" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="h2" gutterBottom>
                        Explora el Mundo del Lujo
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Descubre las últimas tendencias, experiencias exclusivas y productos de alta gama en nuestro feed de Instagram.
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative', px: { xs: 0, md: 4 } }}>
                    <IconButton
                        onClick={() => scroll('left')}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            display: { xs: 'none', md: 'flex' },
                            '&:hover': { bgcolor: 'background.paper', color: 'primary.main' }
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>

                    <Box
                        ref={scrollRef}
                        sx={{
                            display: 'flex',
                            gap: 2,
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
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    flexShrink: 0,
                                    cursor: 'pointer',
                                    '&:hover .overlay': { opacity: 1 },
                                    '&:hover img': { transform: 'scale(1.1)' }
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
                                        transition: 'transform 0.5s ease'
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
                                        bgcolor: 'rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    }}
                                >
                                    <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                                        Ver en Instagram
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <IconButton
                        onClick={() => scroll('right')}
                        sx={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 2,
                            bgcolor: 'background.paper',
                            boxShadow: 2,
                            display: { xs: 'none', md: 'flex' },
                            '&:hover': { bgcolor: 'background.paper', color: 'primary.main' }
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Stack direction="row" justifyContent="center" mt={6}>
                    <Button
                        variant="contained"
                        color="secondary" // Using standard contained button (black)
                        startIcon={<InstagramIcon />}
                        href="https://instagram.com"
                        target="_blank"
                    >
                        Síguenos en Instagram
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default InstagramGallery;
