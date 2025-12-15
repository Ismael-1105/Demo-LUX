import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Avatar,
    Chip,
    Stack
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Partners = () => {
    const partners = [
        {
            role: 'VIDEÓGRAFO Y FOTÓGRAFO',
            name: 'Juan Miguel',
            experience: 'Experiencia desde 2019',
            quote:
                '“Haciendo lo que amo desde el 2019, una idea, una marca, una imagen que crear aprendiendo y divirtiéndose en el camino”',
            color: '#667eea',
            photo: '/images/juan-miguel.jpg'
        },
        {
            role: 'ASESORES EMPRESARIALES',
            name: 'Equipo Multidisciplinario',
            experience: '+15 años de experiencia',
            specialties: ['Materia tributaria', 'Societaria', 'Laboral'],
            professionals: 'Contadores, abogados, administradores',
            color: '#B76E79',
            photo: '/images/equipo.jpg'
        }
    ];

    return (
        <Box
            component="section"
            id="convenios"
            sx={{
                py: { xs: 10, md: 14 },
                background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 9 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: '0.3em',
                            color: 'text.secondary',
                            fontWeight: 600
                        }}
                    >
                        ALIANZAS ESTRATÉGICAS
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.4rem', md: '3.2rem' },
                            mt: 2,
                            fontWeight: 700
                        }}
                    >
                        Convenios y Equipo
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 640,
                            mx: 'auto',
                            mt: 3,
                            lineHeight: 1.7
                        }}
                    >
                        Colaboramos con profesionales expertos para ofrecer soluciones integrales
                    </Typography>
                </Box>

                {/* Cards Wrapper */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={4}
                        sx={{
                            width: '100%',
                            maxWidth: 800
                        }}
                    >
                        {partners.map((partner, index) => (
                            <Card
                                key={index}
                                sx={{
                                    flex: 1,
                                    borderRadius: 4,
                                    background: 'rgba(255,255,255,0.75)',
                                    backdropFilter: 'blur(14px)',
                                    border: '1px solid rgba(255,255,255,0.6)',
                                    boxShadow: '0 20px 55px rgba(0,0,0,0.08)',
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 32px 80px rgba(0,0,0,0.12)'
                                    }
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: { xs: 4, md: 5 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        textAlign: 'center'
                                    }}
                                >
                                    {/* Avatar Glass */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: 100,
                                            height: 80,
                                            mx: 'auto',
                                            mb: 3,
                                            borderRadius: '60%',
                                            background: `linear-gradient(135deg, )`,
                                            padding: '3px',
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: `0 0 0 10px`
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '50%',
                                                backdropFilter: 'blur(10px)',
                                                background: 'rgba(255,255,255,0.35)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Avatar
                                                src={partner.photo}
                                                alt={partner.name}
                                                sx={{
                                                    width: 92,
                                                    height: 92,
                                                    bgcolor: 'rgba(255,255,255,0.7)',
                                                    fontSize: '2rem',
                                                    fontWeight: 700,
                                                    color: partner.color
                                                }}
                                            >
                                                {partner.name.charAt(0)}
                                            </Avatar>
                                        </Box>
                                    </Box>

                                    {/* Role */}
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            letterSpacing: '0.2em',
                                            fontWeight: 600,
                                            color: 'text.secondary'
                                        }}
                                    >
                                        {partner.role}
                                    </Typography>

                                    <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5 }}>
                                        {partner.name}
                                    </Typography>

                                    {/* Experience */}
                                    <Chip
                                        icon={<StarIcon />}
                                        label={partner.experience}
                                        sx={{
                                            mt: 2.5,
                                            alignSelf: 'center',
                                            bgcolor: `15`,
                                            color: '#000',
                                            fontWeight: 600,
                                            '& .MuiChip-icon': { color: partner.color }
                                        }}
                                    />

                                    {/* Content */}
                                    {partner.quote && (
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mt: 3,
                                                fontStyle: 'italic',
                                                color: 'text.secondary',
                                                lineHeight: 1.75,
                                                borderLeft: `3px solid ${partner.color}`,
                                                pl: 2,
                                                textAlign: 'left'
                                            }}
                                        >
                                            {partner.quote}
                                        </Typography>
                                    )}

                                    {partner.specialties && (
                                        <Box sx={{ mt: 3, textAlign: 'left' }}>
                                            <Typography
                                                variant="subtitle2"
                                                fontWeight={600}
                                                sx={{ mb: 1.5 }}
                                            >
                                                Especialidades
                                            </Typography>

                                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                                                {partner.specialties.map((specialty, idx) => (
                                                    <Chip
                                                        key={idx}
                                                        label={specialty}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'rgba(0,0,0,0.04)',
                                                            fontWeight: 500
                                                        }}
                                                    />
                                                ))}
                                            </Stack>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mt: 2, lineHeight: 1.6 }}
                                            >
                                                <strong>Profesionales:</strong> {partner.professionals}
                                            </Typography>
                                        </Box>
                                    )}

                                    {/* Spacer for equal height */}
                                    <Box sx={{ flexGrow: 1 }} />
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Partners;
