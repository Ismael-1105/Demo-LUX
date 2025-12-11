import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#333333',
        },
        background: {
            default: '#ffffff',
            paper: '#f8f8f8',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#555555',
        },
    },
    typography: {
        fontFamily: "'Outfit', sans-serif",
        h1: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
        },
        h2: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
        },
        h3: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
        },
        h4: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
        },
        h5: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
        },
        h6: {
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
        },
        button: {
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    padding: '12px 24px',
                    textTransform: 'uppercase',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                containedPrimary: {
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    border: '1px solid #000000',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#000000',
                    },
                },
                outlinedPrimary: { // Simulating the secondary style from before
                    color: '#000000',
                    borderColor: '#000000',
                    '&:hover': {
                        backgroundColor: '#000000',
                        color: '#ffffff',
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
