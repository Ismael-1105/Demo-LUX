import React from 'react';
import { Paper, Box, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Chip } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';

const ProductsTable = ({ products, onAdd = () => {}, onEdit = () => {}, onDelete = () => {} }) => {
    return (
        <Paper sx={{ p: 3 }}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" fontWeight={700}>Lista de Productos</Typography>
                <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd} sx={{ bgcolor: '#667eea' }}>
                    Agregar Producto
                </Button>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell fontWeight={700}>Nombre</TableCell>
                            <TableCell align="right" fontWeight={700}>Precio</TableCell>
                            <TableCell align="center" fontWeight={700}>Stock</TableCell>
                            <TableCell align="center" fontWeight={700}>Estado</TableCell>
                            <TableCell align="center" fontWeight={700}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product.id} hover>
                                <TableCell>{product.name}</TableCell>
                                <TableCell align="right">${product.price}</TableCell>
                                <TableCell align="center">{product.stock}</TableCell>
                                <TableCell align="center">
                                    <Chip label={product.status === 'active' ? 'Activo' : 'Inactivo'} color={product.status === 'active' ? 'success' : 'default'} size="small" />
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton size="small" color="primary" onClick={() => onEdit(product)}>
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" color="error" onClick={() => onDelete(product)}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ProductsTable;
