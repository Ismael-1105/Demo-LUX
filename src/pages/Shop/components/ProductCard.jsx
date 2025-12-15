import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    Rating,
    Stack,
    Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <Card
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                backgroundColor: '#fff',
                height: '100%',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 30px rgba(0,0,0,0.12)'
                }
            }}
        >
            {/* Image */}
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="160"   // 👈 MÁS PEQUEÑA
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                />

                {/* Badges */}
                <Box sx={{ position: 'absolute', top: 8, left: 8, display: 'flex', gap: 0.5 }}>
                    {product.isNew && (
                        <Chip
                            icon={<FiberNewIcon />}
                            label="Nuevo"
                            size="small"
                            color="primary"
                        />
                    )}
                    {product.isSale && (
                        <Chip
                            icon={<LocalOfferIcon />}
                            label="Oferta"
                            size="small"
                            color="error"
                        />
                    )}
                </Box>
            </Box>

            <CardContent sx={{ p: 2 }}>
                {/* Category */}
                <Typography
                    variant="caption"
                    sx={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontWeight: 600,
                        color: 'primary.main'
                    }}
                >
                    {product.category}
                </Typography>

                {/* Title */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 700,
                        mt: 0.5,
                        mb: 0.5,
                        lineHeight: 1.25,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {product.title}
                </Typography>

                {/* Rating */}
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 1 }}>
                    <Rating size="small" value={product.rating} readOnly precision={0.1} />
                    <Typography variant="caption" color="text.secondary">
                        {product.rating}
                    </Typography>
                </Stack>

                {/* Price */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {product.isSale && (
                        <Typography
                            variant="caption"
                            sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                        >
                            ${product.originalPrice}
                        </Typography>
                    )}
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 800 }}
                    >
                        ${product.price}
                    </Typography>
                </Box>

                {/* CTA */}
                <Button
                    fullWidth
                    variant="contained"
                    size="small"   // 👈 MÁS COMPACTO
                    startIcon={<ShoppingCartIcon fontSize="small" />}
                    onClick={() => onAddToCart(product)}
                    sx={{
                        py: 0.9,
                        fontWeight: 700,
                        textTransform: 'none',
                        borderRadius: 2
                    }}
                >
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
