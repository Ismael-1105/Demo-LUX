import React from 'react';
import { Box, Typography } from '@mui/material';

const ShopHeader = () => {
    return (
        <Box sx={{ textAlign: 'center', mb: 7 }}>

            <Typography
                variant="h2"
                sx={{ fontWeight: 800, fontSize: { xs: '2.4rem', md: '3.2rem' }, mb: 2 }}
            >
                Productos digitales
            </Typography>

            <Typography
                color="text.secondary"
                sx={{ maxWidth: 650, mx: 'auto', fontSize: '1.05rem' }}
            >
                Cursos, ebooks y recursos diseñados para ayudarte a crecer de forma profesional.
            </Typography>
        </Box>
    );
};

export default ShopHeader;
