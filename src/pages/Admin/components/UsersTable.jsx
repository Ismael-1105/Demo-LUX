import React from 'react';
import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Chip } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

const UsersTable = ({ users, onEdit = () => {} }) => {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>Lista de Usuarios</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                            <TableCell fontWeight={700}>Nombre</TableCell>
                            <TableCell fontWeight={700}>Email</TableCell>
                            <TableCell fontWeight={700}>Fecha de Registro</TableCell>
                            <TableCell align="center" fontWeight={700}>Estado</TableCell>
                            <TableCell align="center" fontWeight={700}>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(userItem => (
                            <TableRow key={userItem.id} hover>
                                <TableCell fontWeight={600}>{userItem.name}</TableCell>
                                <TableCell>{userItem.email}</TableCell>
                                <TableCell>{userItem.joinDate}</TableCell>
                                <TableCell align="center">
                                    <Chip label={userItem.status === 'active' ? 'Activo' : 'Inactivo'} color={userItem.status === 'active' ? 'success' : 'default'} size="small" />
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton size="small" color="primary" onClick={() => onEdit(userItem)}>
                                        <EditIcon fontSize="small" />
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

export default UsersTable;
