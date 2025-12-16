import React from 'react';
import { Card, CardContent, Box, Typography, keyframes } from '@mui/material';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const StatCard = ({ icon: IconComponent, title, value, color }) => {
    return (
        <Card sx={{
            animation: `${fadeIn} 0.6s ease forwards`,
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            },
            transition: 'all 0.4s ease'
        }}>
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Box sx={{ bgcolor: `${color}15`, p: 3, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {IconComponent && <IconComponent sx={{ color, fontSize: 48 }} />}
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography color="text.secondary" variant="body2" sx={{ mb: 0.5 }}>
                            {title}
                        </Typography>
                        <Typography variant="h3" fontWeight={800} sx={{ fontSize: '2.5rem' }}>
                            {value}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatCard;
