import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const servicesData = [
    {
        title: "Community Management",
        description: "Construimos y gestionamos tu comunidad en línea, creando contenido atractivo y manteniendo tu marca relevante y en crecimiento. ¡Llevamos tu marca al siguiente nivel!"
    },
    {
        title: "Branding",
        description: "Creamos identidades de marca únicas y poderosas que resuenan con tu público objetivo. Transformamos tu visión en una marca inolvidable."
    },
    {
        title: "Creadores UGC",
        description: "Fomentamos la creación de contenido auténtico y atractivo por parte de tus usuarios, transformándolo en una poderosa herramienta de marketing. ¡Convierte a tus clientes en tus embajadores!"
    },
    {
        title: "Video y Fotografía",
        description: "Creamos videos cautivadores y de alta calidad que capturan la esencia de tu marca. Capturamos la esencia de tu marca a través de imágenes impresionantes y de alta calidad."
    },
    {
        title: "Diseño Web",
        description: "Desarrollamos y diseñamos sitios web atractivos y funcionales que reflejan la identidad de tu marca. Sitios optimizados para SEO y responsivos."
    },
    {
        title: "Marketing de Influencers",
        description: "Conectamos tu marca con influencers relevantes que pueden amplificar tu mensaje. Incluye identificación, negociación y seguimiento de métricas."
    }
];

const Services = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box component="section" id="servicios" sx={{ py: 12 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="h2" gutterBottom sx={{ fontSize: '2.5rem' }}>
                        Nuestros Servicios
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Soluciones integrales para diferenciar tu marca
                    </Typography>
                </Box>

                <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 4 }}>
                    {servicesData.map((service, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            disableGutters
                            elevation={0}
                            square
                            sx={{
                                '&:before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ fontSize: '2rem', fontWeight: 300 }} />}
                                aria-controls={`panel${index}bh-content`}
                                id={`panel${index}bh-header`}
                                sx={{
                                    py: 2,
                                    '& .MuiAccordionSummary-content': {
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }
                                }}
                            >
                                <Typography sx={{ width: '5%', flexShrink: 0, color: 'text.secondary', fontFamily: 'Playfair Display', opacity: 0.5 }}>
                                    0{index + 1}
                                </Typography>
                                <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' }, width: '85%', flexShrink: 0 }}>
                                    {service.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ pl: { xs: 0, md: '10%' }, pb: 4 }}>
                                <Typography color="text.secondary" sx={{ maxWidth: 600 }}>
                                    {service.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
