import React from 'react';
import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';

const OrdersTable = ({ orders }) => {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>Lista de Pedidos</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell fontWeight={700}>Pedido ID</TableCell>
                            <TableCell fontWeight={700}>Cliente</TableCell>
                            <TableCell align="right" fontWeight={700}>Total</TableCell>
                            <TableCell align="center" fontWeight={700}>Estado</TableCell>
                            <TableCell fontWeight={700}>Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.id} hover>
                                <TableCell fontWeight={600}>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell align="right">${order.total}</TableCell>
                                <TableCell align="center">
                                    <Chip
                                        label={order.status === 'completed' ? 'Completado' : order.status === 'pending' ? 'Pendiente' : 'Procesando'}
                                        color={order.status === 'completed' ? 'success' : order.status === 'pending' ? 'warning' : 'info'}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>{order.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default OrdersTable;
