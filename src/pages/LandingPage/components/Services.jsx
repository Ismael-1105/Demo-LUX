import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    IconButton,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BrushIcon from "@mui/icons-material/Brush";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WebIcon from "@mui/icons-material/Web";
import StarIcon from "@mui/icons-material/Star";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InfoIcon from "@mui/icons-material/Info";

const servicesData = [
    {
        icon: PeopleIcon,
        title: "Community Management",
        description:
            "Construimos comunidades digitales, manteniendo tu marca activa y creciendo.",
        features: ["Gestión de redes", "Creación de contenido", "Métricas"],
    },
    {
        icon: BrushIcon,
        title: "Branding",
        description:
            "Creamos identidades visuales sólidas y coherentes con tu visión.",
        features: ["Identidad visual", "Manual de marca", "Estrategia"],
    },
    {
        icon: CameraAltIcon,
        title: "Creadores UGC",
        description:
            "Contenido auténtico creado por tus usuarios para impulsar tu marca.",
        features: ["Contenido UGC", "Campañas", "Embajadores"],
    },
    {
        icon: VideoLibraryIcon,
        title: "Video y Fotografía",
        description:
            "Producción audiovisual profesional para elevar tu contenido.",
        features: ["Videos HD", "Fotografía", "Edición"],
    },
    {
        icon: WebIcon,
        title: "Diseño Web",
        description:
            "Sitios web modernos, rápidos, responsivos y optimizados.",
        features: ["Responsive", "SEO", "Desarrollo"],
    },
    {
        icon: StarIcon,
        title: "Marketing de Influencers",
        description:
            "Conectamos tu marca con influenciadores clave.",
        features: ["Selección", "Gestión", "ROI"],
    },
];

const FlipCard = ({ service }) => {
    const IconComp = service.icon;
    const [flipped, setFlipped] = useState(false);

    const handleToggle = () => setFlipped((s) => !s);

    return (
        <Box
            sx={{
                perspective: 1200,
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
            onClick={handleToggle}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
            role="button"
            tabIndex={0}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 350,
                    position: 'relative',
                    minHeight: { xs: 200, sm: 320 },
                    transformStyle: 'preserve-3d',
                    transition: 'transform 500ms cubic-bezier(.2,.8,.2,1)',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front: only icon, large and centered */}
                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: '0 12px 30px rgba(2,6,23,0.06)',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 2,
                        position: 'relative',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                    }}
                >
                    <Box sx={{
                        width: { xs: 140, sm: 140 },
                        height: { xs: 140, sm: 250 },
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent'
                    }}>
                        <IconComp sx={{ fontSize: { xs: 44, sm: 56 }, color: 'primary.main' }} />
                    </Box>
                </Card>

                {/* Back: full content centered and readable */}
                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: '0 12px 30px rgba(2,6,23,0.06)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 2, sm: 3 },
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        boxSizing: 'border-box',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{service.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: '0.95rem', mb: 2 }}>{service.description}</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        {service.features.map((f, i) => (
                            <Typography key={i} sx={{ fontSize: '0.95rem', color: 'text.secondary', mb: 0.6 }}>
                                • {f}
                            </Typography>
                        ))}
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

const ServicesFlipCards = () => {
    return (
        <Box component="section" id="servicios" sx={{ py: 8, bgcolor: "#fafbfc" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        fontSize: { xs: '1.8rem', md: '2.6rem' },
                        textAlign: "center",
                        fontWeight: 700,
                    }}
                >
                    Nuestros Servicios
                </Typography>

                <Grid container spacing={3}>
                    {servicesData.map((service, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <FlipCard service={service} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesFlipCards;