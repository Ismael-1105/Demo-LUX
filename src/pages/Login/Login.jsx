import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Stack,
    Checkbox,
    FormControlLabel,
    Link,
    Divider,
    IconButton,
    Paper
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, isAdmin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const result = login(email, password);
        
        if (result.isAdmin) {
            navigate('/admin');
        } else {
            navigate('/');
        }
    };

    // Credenciales de demostración
    const fillAdminCredentials = () => {
        setEmail('admin@lux.com');
        setPassword('admin123');
    };

    const fillUserCredentials = () => {
        setEmail('user@example.com');
        setPassword('password123');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }
            }}
        >
            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
                <Paper
                    elevation={8}
                    sx={{
                        p: { xs: 4, sm: 6 },
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {/* Logo/Brand */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                mb: 1,
                                letterSpacing: 3,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            LUX
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Bienvenido de vuelta
                        </Typography>
                    </Box>

                    {/* Social Login Buttons */}
                    <Stack spacing={2} sx={{ mb: 3 }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<GoogleIcon />}
                            sx={{
                                py: 1.3,
                                borderColor: 'divider',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    bgcolor: 'rgba(103,126,234,0.05)',
                                }
                            }}
                        >
                            Continuar con Google
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<FacebookIcon />}
                            sx={{
                                py: 1.3,
                                borderColor: 'divider',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    bgcolor: 'rgba(103,126,234,0.05)',
                                }
                            }}
                        >
                            Continuar con Facebook
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            o con email
                        </Typography>
                    </Divider>

                    {/* Login Form */}
                    <Box component="form" onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        }
                                    }
                                }}
                            />

                            <TextField
                                label="Contraseña"
                                type="password"
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        }
                                    }
                                }}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            size="small"
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" color="text.secondary">
                                            Recordarme
                                        </Typography>
                                    }
                                />
                                <Link
                                    href="#"
                                    variant="body2"
                                    sx={{
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        }
                                    }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Stack>
                    </Box>

                    {/* Demo Credentials */}
                    <Divider sx={{ my: 3 }}>
                        <Typography variant="caption" color="text.secondary">
                            CREDENCIALES DE DEMOSTRACIÓN
                        </Typography>
                    </Divider>

                    <Stack spacing={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={fillAdminCredentials}
                            sx={{
                                py: 1,
                                color: '#667eea',
                                borderColor: '#667eea',
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: 'rgba(102, 126, 234, 0.1)',
                                }
                            }}
                        >
                            👨‍💼 Probar como Admin
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={fillUserCredentials}
                            sx={{
                                py: 1,
                                color: '#764ba2',
                                borderColor: '#764ba2',
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: 'rgba(118, 75, 162, 0.1)',
                                }
                            }}
                        >
                            👤 Probar como Usuario
                        </Button>
                    </Stack>

                    {/* Register Link */}
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            ¿No tienes una cuenta?{' '}
                            <Link
                                href="#"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    }
                                }}
                            >
                                Crear cuenta
                            </Link>
                        </Typography>
                    </Box>
                </Paper>

                {/* Back to Home Link */}
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Link
                        href="/"
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        ← Volver al inicio
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
