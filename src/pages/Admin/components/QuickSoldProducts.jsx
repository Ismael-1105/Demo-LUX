import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Chip, Box } from '@mui/material';

const QuickSoldProducts = ({ soldData = [] }) => {
    return (
        <Paper sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Top Productos Vendidos</Typography>
            <List>
                {soldData.map((p, i) => (
                    <ListItem key={p.name} sx={{ py: 2.5, px: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 2, bgcolor: 'background.paper', borderRadius: 2, p: 1.5, transition: 'transform 0.18s ease, box-shadow 0.18s ease', '&:hover': { transform: 'translateX(4px)', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: '#e8eaf6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{i + 1}</Box>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>{p.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">{p.sold} vendidos</Typography>
                                </Box>
                            </Box>
                            <Chip label={p.sold} color="primary" sx={{ height: 36, fontSize: '1rem' }} />
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default QuickSoldProducts;
