import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const KitModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      aria-labelledby="kit-despegue-title"
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
        }
      }}
    >
      <DialogTitle 
        id="kit-despegue-title" 
        sx={{ 
          pb: 1,
          pt: 3,
          px: 3
        }}
      >
        <Typography variant="h5" component="div" fontWeight="600">
          Kit de Despegue
        </Typography>
        <Typography variant="subtitle2" color="primary" fontWeight="500">
          Plan Básico
        </Typography>
      </DialogTitle>
      
      <DialogContent sx={{ px: 3, pb: 2 }}>
        <Box sx={{ mb: 3, mt: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: '700', color: 'primary.main', mb: 0.5 }}>
            $8 <Typography component="span" variant="body1" color="text.secondary">/mes</Typography>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            Inicia tu viaje de marketing con lo esencial. Acceso inmediato a nuestra biblioteca de fundamentos. Ideal para probar, aprender y empezar a actuar.
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: '600', color: 'text.primary' }}>
          Lo que incluye:
        </Typography>

        <List sx={{ py: 0 }}>
          {[
            'Recursos gratuitos',
            'Ideas de contenido',
            'Tutoriales paso a paso',
            'Temas de marketing pregrabados',
            'Webinar mensual en vivo',
            'Comunidad exclusiva de WhatsApp',
            'Close Friends de Instagram',
            'Regalos de temporada'
          ].map((item, index) => (
            <ListItem key={index} sx={{ py: 0.75, px: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CheckCircleIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary={item}
                primaryTypographyProps={{
                  variant: 'body2',
                  sx: { fontWeight: 400 }
                }}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, pb: 3, pt: 2 }}>
        <Button 
          onClick={onClose}
          sx={{ 
            textTransform: 'none',
            fontWeight: 500
          }}
        >
          Cerrar
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            if (onConfirm) onConfirm();
            onClose();
          }}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            px: 3,
            boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
            }
          }}
        >
          ¡Quiero Despegar!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default KitModal;