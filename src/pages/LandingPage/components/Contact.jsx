import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Stack, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    return (
        <Box component="section" id="contacto" sx={{ py: 12, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom>
                            Conversemos
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                            ¿Listo para transformar tu marca? Contáctanos y comencemos a crear algo extraordinario juntos.
                        </Typography>

                        <Stack spacing={3} sx={{ mb: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '50%' }}>
                                    <EmailIcon />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={600}>Email</Typography>
                                    <Link href="mailto:luxagenciademktg@gmail.com" color="text.secondary" underline="hover">
                                        luxagenciademktg@gmail.com
                                    </Link>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '50%' }}>
                                    <PhoneIcon />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={600}>Teléfono</Typography>
                                    <Link href="tel:+593998329028" color="text.secondary" underline="hover">
                                        (+593) 99 832 9028
                                    </Link>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '50%' }}>
                                    <LocationOnIcon />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={600}>Ubicación</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Loja – Ecuador
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Link href="#" color="inherit" sx={{ transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}>
                                <InstagramIcon />
                            </Link>
                            {/* TikTok Icon replacement or custom svg */}
                            <Link href="#" color="inherit" sx={{ transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}>
                                <Typography variant="button" sx={{ fontWeight: 700 }}>Tk</Typography> {/* Temporary Text Icon */}
                            </Link>
                            <Link href="#" color="inherit" sx={{ transition: 'color 0.3s', '&:hover': { color: 'primary.main' } }}>
                                <FacebookIcon />
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box component="form" sx={{ bgcolor: 'background.default', p: { xs: 3, md: 6 }, borderRadius: 1 }}>
                            <Stack spacing={3}>
                                <TextField label="Nombre" variant="outlined" fullWidth required />
                                <TextField label="Email" type="email" variant="outlined" fullWidth required />
                                <TextField label="Teléfono" type="tel" variant="outlined" fullWidth />
                                <TextField label="Mensaje" multiline rows={4} variant="outlined" fullWidth required />
                                <Button type="submit" variant="contained" size="large" fullWidth>
                                    Enviar Mensaje
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
