import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#667eea', '#764ba2', '#B76E79', '#D4AF37', '#4caf50'];

const AdminCharts = ({ soldData = [], orders = [] }) => {
    const statusCounts = orders.reduce((acc, o) => {
        acc[o.status] = (acc[o.status] || 0) + 1;
        return acc;
    }, {});

    const pieData = Object.keys(statusCounts).map((key) => ({ name: key, value: statusCounts[key] }));

    // Custom tooltip component for Recharts
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            return (
                <div style={{ backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.12)', borderRadius: 8, padding: 12, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
                    <strong style={{ display: 'block', marginBottom: 6 }}>{label}</strong>
                    <div>{data.name || data.dataKey || ''}: <strong>{data.value}</strong></div>
                </div>
            );
        }
        return null;
    };

    const renderPieLabel = ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`;

    return (
        <Paper sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Analytics</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>Ventas por Producto</Typography>
                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={soldData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="sold" fill="#667eea" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>

                <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>Distribución de Pedidos</Typography>
                    <ResponsiveContainer width="100%" height={280}>
                        <PieChart>
                            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label={renderPieLabel}>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </Paper>
    );
};

export default AdminCharts;
