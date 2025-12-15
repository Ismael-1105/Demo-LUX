import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart }) => {
    if (products.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', py: 10 }}>
                <Typography color="text.secondary">
                    No hay productos en esta categoría
                </Typography>
            </Box>
        );
    }

    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;
