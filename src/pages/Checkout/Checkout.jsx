import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Stack,
    Grid,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Card,
    CardContent
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, getSubtotal, getTax, getTotal } = useCart();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Contact Info
        fullName: '',
        email: '',
        phone: '',
        // Payment Method
        paymentMethod: 'card',
        // Card Details
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        // Billing Address
        address: '',
        city: '',
        country: 'Ecuador',
        postalCode: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Process payment (simulated)
            alert('¡Pago procesado exitosamente! (Simulado)');
            navigate('/');
        }
    };

    if (cartItems.length === 0) {
        return (
            <Container maxWidth="md" sx={{ py: 12, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Tu carrito está vacío
                </Typography>
                <Button variant="contained" onClick={() => navigate('/tienda')} sx={{ mt: 3 }}>
                    Ir a la tienda
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom fontWeight={700}>
                        Finalizar Comp ra
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Paso {step} de 3
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Left Column - Form */}
                    <Grid item xs={12} md={7}>
                        <Paper elevation={2} sx={{ p: 4 }}>
                            <Box component="form" onSubmit={handleSubmit}>
                                {/* Step 1: Contact Information */}
                                {step === 1 && (
                                    <>
                                        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                                            Información de Contacto
                                        </Typography>
                                        <Stack spacing={3}>
                                            <TextField
                                                label="Nombre Completo"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                fullWidth
                                            />
                                            <TextField
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                fullWidth
                                            />
                                            <TextField
                                                label="Teléfono"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                fullWidth
                                            />
                                        </Stack>
                                    </>
                                )}

                                {/* Step 2: Payment Method */}
                                {step === 2 && (
                                    <>
                                        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                                            Método de Pago
                                        </Typography>
                                        <Stack spacing={3}>
                                            <FormControl>
                                                <RadioGroup
                                                    value={formData.paymentMethod}
                                                    onChange={handleInputChange}
                                                    name="paymentMethod"
                                                >
                                                    <FormControlLabel
                                                        value="card"
                                                        control={<Radio />}
                                                        label={
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                <CreditCardIcon />
                                                                <Typography>Tarjeta de Crédito/Débito</Typography>
                                                            </Box>
                                                        }
                                                    />
                                                </RadioGroup>
                                            </FormControl>

                                            <Divider sx={{ my: 2 }} />

                                            <TextField
                                                label="Número de Tarjeta"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="1234 5678 9012 3456"
                                                required
                                                fullWidth
                                            />
                                            <TextField
                                                label="Nombre en la Tarjeta"
                                                name="cardName"
                                                value={formData.cardName}
                                                onChange={handleInputChange}
                                                required
                                                fullWidth
                                            />
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="Fecha de Expiración"
                                                        name="expiryDate"
                                                        value={formData.expiryDate}
                                                        onChange={handleInputChange}
                                                        placeholder="MM/YY"
                                                        required
                                                        fullWidth
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TextField
                                                        label="CVV"
                                                        name="cvv"
                                                        value={formData.cvv}
                                                        onChange={handleInputChange}
                                                        placeholder="123"
                                                        required
                                                        fullWidth
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </>
                                )}

                                {/* Step 3: Review & Confirm */}
                                {step === 3 && (
                                    <>
                                        <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                                            Revisar y Confirmar
                                        </Typography>
                                        <Stack spacing={2}>
                                            <Box>
                                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                    Información de Contacto
                                                </Typography>
                                                <Typography variant="body1">{formData.fullName}</Typography>
                                                <Typography variant="body2" color="text.secondary">{formData.email}</Typography>
                                                <Typography variant="body2" color="text.secondary">{formData.phone}</Typography>
                                            </Box>
                                            <Divider />
                                            <Box>
                                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                    Método de Pago
                                                </Typography>
                                                <Typography variant="body1">Tarjeta terminada en {formData.cardNumber.slice(-4)}</Typography>
                                            </Box>
                                        </Stack>
                                    </>
                                )}

                                {/* Navigation Buttons */}
                                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                                    {step > 1 && (
                                        <Button
                                            variant="outlined"
                                            onClick={() => setStep(step - 1)}
                                            fullWidth
                                        >
                                            Atrás
                                        </Button>
                                    )}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        startIcon={step === 3 ? <LockIcon /> : null}
                                    >
                                        {step === 3 ? 'Procesar Pago' : 'Continuar'}
                                    </Button>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Column - Order Summary */}
                    <Grid item xs={12} md={5}>
                        <Paper elevation={2} sx={{ p: 4, position: 'sticky', top: 20 }}>
                            <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
                                Resumen del Pedido
                            </Typography>

                            {/* Cart Items */}
                            <Stack spacing={2} sx={{ mb: 3 }}>
                                {cartItems.map((item) => (
                                    <Box key={item.id} sx={{ display: 'flex', gap: 2 }}>
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 1 }}
                                        />
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Cantidad: {item.quantity}
                                            </Typography>
                                        </Box>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>

                            <Divider sx={{ my: 3 }} />

                            {/* Price Summary */}
                            <Stack spacing={1.5}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                                    <Typography variant="body1" fontWeight={600}>${getSubtotal().toFixed(2)}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">IVA (16%)</Typography>
                                    <Typography variant="body1" fontWeight={600}>${getTax().toFixed(2)}</Typography>
                                </Box>
                                <Divider />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="h6" fontWeight={700}>Total</Typography>
                                    <Typography variant="h6" fontWeight={700} color="primary">
                                        ${getTotal().toFixed(2)}
                                    </Typography>
                                </Box>
                            </Stack>

                            {/* Security Badge */}
                            <Box sx={{ mt: 3, p: 2, bgcolor: 'success.light', borderRadius: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LockIcon sx={{ color: 'success.dark', fontSize: 20 }} />
                                <Typography variant="caption" color="success.dark">
                                    Pago seguro y encriptado
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Checkout;
