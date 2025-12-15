import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FlagIcon from '@mui/icons-material/Flag';
import VisibilityIcon from '@mui/icons-material/Visibility';

const About = () => {
    const values = [
        {
            icon: StarIcon,
            title: 'Elegancia',
            description: 'Status y exclusividad en cada proyecto',
            color: '#D4AF37'
        },
        {
            icon: VerifiedIcon,
            title: 'Calidad',
            description: 'Responsabilidad y eficacia en cada servicio',
            color: '#667eea'
        },
        {
            icon: LightbulbIcon,
            title: 'Innovación',
            description: 'Tendencias con identidad propia',
            color: '#B76E79'
        }
    ];

    return (
        <Box component="section" id="nosotros" sx={{ py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">

                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.4rem' },
                            fontWeight: 700,
                            mb: 1.5
                        }}
                    >
                        Quiénes Somos
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 720,
                            mx: 'auto',
                            fontStyle: 'italic',
                            lineHeight: 1.65
                        }}
                    >
                        “LUX nace de un sueño: transformar marcas en símbolos de exclusividad,
                        reflejando el valor único de cada producto y servicio.”
                    </Typography>
                </Box>

                {/* Mission & Vision */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 6
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={3}
                        sx={{
                            maxWidth: 1100,
                            width: '100%',
                        }}
                    >
                        {[
                            {
                                title: 'Misión',
                                text: 'Satisfacer la demanda de marcas que buscan destacar, transformando elementos del lujo en experiencias memorables.',
                                icon: <FlagIcon />
                            },
                            {
                                title: 'Visión',
                                text: 'Ser la agencia líder en elevar marcas, llevando exclusividad y prestigio al más alto nivel.',
                                icon: <VisibilityIcon />
                            }
                        ].map((item, index) => (
                            <Card
                                key={index}
                                sx={{
                                    flex: 1,
                                    borderRadius: 4,
                                    background: '#fff',
                                    boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
                                    transition: 'all 0.35s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 24px 56px rgba(0,0,0,0.08)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                                        {item.icon}
                                        <Typography
                                            variant="overline"
                                            sx={{ fontWeight: 600, letterSpacing: '0.2em' }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        variant="body1"
                                        sx={{ lineHeight: 1.7, fontWeight: 500 }}
                                    >
                                        {item.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>



                {/* Values */}
                <Box>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            mb: 4,
                            fontWeight: 700,
                            fontSize: { xs: '1.35rem', md: '1.7rem' }
                        }}
                    >
                        Nuestros Valores
                    </Typography>

                    <Grid container spacing={2} justifyContent="center">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <Grid item xs={12} sm={4} md={4} key={index}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            textAlign: 'center',
                                            p: 2.5,
                                            borderRadius: 2.5,
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                                            transition: 'all 0.25s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 16px 36px ${value.color}22`
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 1.5,
                                                background: `linear-gradient(135deg, 30)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 1.5
                                            }}
                                        >
                                            <IconComponent sx={{ fontSize: 26 }} />
                                        </Box>

                                        <Typography
                                            variant="subtitle2"
                                            sx={{ fontWeight: 700, mb: 0.6 }}
                                        >
                                            {value.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontSize: '0.88rem' }}
                                        >
                                            {value.description}
                                        </Typography>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default About;
