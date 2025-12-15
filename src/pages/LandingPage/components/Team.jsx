import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    keyframes
} from '@mui/material';
import KitModal from '../../../components/KitModal';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const Team = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            component="section"
            id="equipo"
            sx={{
                py: { xs: 6, md: 8 },
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default'
            }}
        >
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #181818 0%, #232323 100%)',
                        color: 'common.white',
                        py: { xs: 4, sm: 5 },
                        px: { xs: 3, sm: 4 },
                        borderRadius: 2,
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
                            animation: `${shimmer} 3s linear infinite`,
                            backgroundSize: '200% 100%',
                        }
                    }}
                >
                    {/* Icon */}
                    <Box
                        sx={{
                            width: 55,
                            height: 55,
                            mx: 'auto',
                            mb: 2.5,
                            background: 'linear-gradient(135deg, rgba(103,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: `${float} 4s ease-in-out infinite`,
                        }}
                    >
                        <RocketLaunchIcon sx={{ fontSize: 26, color: 'white' }} />
                    </Box>

                    {/* Overline */}
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'grey.400',
                            letterSpacing: '.15em',
                            fontWeight: 500,
                            mb: 1,
                            fontSize: '0.65rem'
                        }}
                    >
                        CARRERAS
                    </Typography>

                    {/* Heading */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '1.8rem',
                            mb: 2,
                            fontWeight: 700,
                            lineHeight: 1.2
                        }}
                    >
                        Únete a Nuestro Equipo
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '0.9rem',
                            color: 'grey.300',
                            mb: 3,
                            lineHeight: 1.6,
                            maxWidth: 420,
                            mx: 'auto'
                        }}
                    >
                        Estamos buscando talento creativo y motivado.
                        Da el siguiente paso y forma parte del equipo.
                    </Typography>

                    {/* Button */}
                    <Button
                        variant="outlined"
                        color="inherit"
                        size="medium"
                        onClick={handleOpen}
                        startIcon={<RocketLaunchIcon sx={{ fontSize: 16 }} />}
                        sx={{
                            borderColor: 'common.white',
                            color: 'common.white',
                            px: 4,
                            py: 1.3,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            borderWidth: '2px',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            transition: 'all .25s ease',
                            '&:hover': {
                                bgcolor: 'common.white',
                                color: 'black',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 18px rgba(255,255,255,0.2)',
                            }
                        }}
                    >
                        Sé parte de Ángeles
                    </Button>

                    <KitModal open={open} onClose={handleClose} />
                </Box>
            </Container>
        </Box>
    );
};

export default Team;
