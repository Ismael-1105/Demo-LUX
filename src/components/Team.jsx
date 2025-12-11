import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Team = () => {
    return (
        <Box component="section" id="equipo" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        bgcolor: '#111',
                        color: 'common.white',
                        py: 12,
                        px: 3,
                        borderRadius: 1,
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 800, mx: 'auto' }}>
                        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 4 }}>
                            Únete a Nuestro Equipo
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'grey.400', mb: 6, lineHeight: 1.8 }}>
                            Buscamos talentos apasionados y creativos para unirse a nuestro equipo dinámico.
                            Si estás listo para desafiar tus límites y hacer un impacto, ¡queremos conocerte!
                        </Typography>
                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            href="#"
                            sx={{
                                borderColor: 'common.white',
                                color: 'common.white',
                                px: 6,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: 'common.white',
                                    color: 'black',
                                }
                            }}
                        >
                            Sé parte de Ángeles
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Team;
