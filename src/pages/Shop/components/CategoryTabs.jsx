import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const CategoryTabs = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Tabs
                value={selectedCategory}
                onChange={(e, v) => onCategoryChange(v)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    '& .MuiTab-root': {
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem'
                    }
                }}
            >
                {categories.map((c, i) => (
                    <Tab key={i} label={c} />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;
