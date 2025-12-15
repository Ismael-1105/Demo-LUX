import React from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Button,
    Divider,
    Stack,
    Badge
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ open, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, getTotalItems, getSubtotal, getTax, getTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '100%', sm: 400 },
                    p: 3
                }
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" fontWeight={700}>
                    Carrito ({getTotalItems()})
                </Typography>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Cart Items or Empty State */}
            {cartItems.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <ShoppingCartIcon sx={{ fontSize: 80, color: 'grey.300', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Tu carrito está vacío
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        ¡Agrega productos para comenzar!
                    </Typography>
                    <Button variant="contained" onClick={onClose}>
                        Ir a la tienda
                    </Button>
                </Box>
            ) : (
                <>
                    {/* Items List */}
                    <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 3 }}>
                        <Stack spacing={2}>
                            {cartItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        p: 2,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 2,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: 2
                                        }
                                    }}
                                >
                                    {/* Product Image */}
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            objectFit: 'cover',
                                            borderRadius: 1
                                        }}
                                    />

                                    {/* Product Info */}
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 0.5 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="primary" fontWeight={700} sx={{ mb: 1 }}>
                                            ${item.price}
                                        </Typography>

                                        {/* Quantity Controls */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <IconButton
                                                size="small"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                sx={{
                                                    bgcolor: 'background.default',
                                                    '&:hover': { bgcolor: 'action.hover' }
                                                }}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>

                                            <Typography variant="body2" fontWeight={600} sx={{ minWidth: 30, textAlign: 'center' }}>
                                                {item.quantity}
                                            </Typography>

                                            <IconButton
                                                size="small"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                sx={{
                                                    bgcolor: 'background.default',
                                                    '&:hover': { bgcolor: 'action.hover' }
                                                }}
                                            >
                                                <AddIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => removeFromCart(item.id)}
                                                sx={{ ml: 'auto' }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>
                    </Box>

                    {/* Summary */}
                    <Box>
                        <Divider sx={{ mb: 2 }} />

                        <Stack spacing={1} sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Subtotal
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                    ${getSubtotal().toFixed(2)}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="body2" color="text.secondary">
                                    IVA (16%)
                                </Typography>
                                <Typography variant="body2" fontWeight={600}>
                                    ${getTax().toFixed(2)}
                                </Typography>
                            </Box>

                            <Divider />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h6" fontWeight={700}>
                                    Total
                                </Typography>
                                <Typography variant="h6" fontWeight={700} color="primary">
                                    ${getTotal().toFixed(2)}
                                </Typography>
                            </Box>
                        </Stack>

                        {/* Checkout Button */}
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={handleCheckout}
                            sx={{
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 600
                            }}
                        >
                            Proceder al Pago
                        </Button>
                    </Box>
                </>
            )}
        </Drawer>
    );
};

export default CartDrawer;
