import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            light: '#333333',
            dark: '#000000',
        },
        secondary: {
            main: '#333333',
            light: '#666666',
        },
        background: {
            default: '#ffffff',
            paper: '#f8f8f8',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#555555',
        },
        // Luxury color additions
        luxury: {
            roseGold: '#B76E79',
            champagne: '#F7E7CE',
            deepPurple: '#4A154B',
            gold: '#D4AF37',
            platinum: '#E5E4E2',
        },
        gradient: {
            primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            gold: 'linear-gradient(135deg, #D4AF37 0%, #F7E7CE 100%)',
            rose: 'linear-gradient(135deg, #B76E79 0%, #764ba2 100%)',
            dark: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
        },
    },
    typography: {
        fontFamily: "'Outfit', sans-serif",
        h1: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: '3.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '2.75rem',
            lineHeight: 1.3,
        },
        h3: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '2.25rem',
            lineHeight: 1.4,
        },
        h4: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h5: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.5,
        },
        h6: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        button: {
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            letterSpacing: '0.05em',
        },
    },
    shadows: [
        'none',
        '0 2px 4px rgba(0,0,0,0.05)',
        '0 4px 8px rgba(0,0,0,0.08)',
        '0 8px 16px rgba(0,0,0,0.1)',
        '0 12px 24px rgba(0,0,0,0.12)',
        '0 16px 32px rgba(0,0,0,0.15)',
        '0 20px 40px rgba(0,0,0,0.18)',
        '0 24px 48px rgba(0,0,0,0.2)',
        '0 2px 4px rgba(0,0,0,0.05)',
        '0 4px 8px rgba(0,0,0,0.08)',
        '0 8px 16px rgba(0,0,0,0.1)',
        '0 12px 24px rgba(0,0,0,0.12)',
        '0 16px 32px rgba(0,0,0,0.15)',
        '0 20px 40px rgba(0,0,0,0.18)',
        '0 24px 48px rgba(0,0,0,0.2)',
        '0 2px 4px rgba(0,0,0,0.05)',
        '0 4px 8px rgba(0,0,0,0.08)',
        '0 8px 16px rgba(0,0,0,0.1)',
        '0 12px 24px rgba(0,0,0,0.12)',
        '0 16px 32px rgba(0,0,0,0.15)',
        '0 20px 40px rgba(0,0,0,0.18)',
        '0 24px 48px rgba(0,0,0,0.2)',
        '0 2px 4px rgba(0,0,0,0.05)',
        '0 4px 8px rgba(0,0,0,0.08)',
        '0 12px 24px rgba(0,0,0,0.12)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '12px 32px',
                    textTransform: 'uppercase',
                    boxShadow: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        transform: 'translateY(-2px)',
                    },
                    '&:active': {
                        transform: 'translateY(0)',
                    },
                },
                containedPrimary: {
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: '1px solid #000000',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#000000',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    },
                },
                outlinedPrimary: {
                    color: '#000000',
                    borderColor: '#000000',
                    borderWidth: '2px',
                    '&:hover': {
                        backgroundColor: '#000000',
                        color: '#ffffff',
                        borderWidth: '2px',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    borderBottom: '1px solid #e0e0e0',
                    '&:before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: '24px 0',
                },
                content: {
                    '&.Mui-expanded': {
                        margin: '12px 0',
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: '0 0 24px 0',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        '& fieldset': {
                            borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#000000',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                        },
                    },
                    '& .MuiInputBase-input': {
                        fontFamily: "'Outfit', sans-serif",
                    },
                },
            },
        },
    },
});

export default theme;
