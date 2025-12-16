import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import ServiceAreaChartCard from './ServiceAreaChartCard';
import MainCard from '../ui-components/MainCard';
import SkeletonPopularCard from '../ui-components/Skeleton/PopularCard';
import { gridSpacing } from '../constants/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function PopularServicesCard({ isLoading }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Stack sx={{ gap: gridSpacing }}>
                            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h4">Servicios Populares</Typography>
                                <IconButton size="small" sx={{ mt: -0.625 }}>
                                    <MoreHorizOutlinedIcon
                                        fontSize="small"
                                        sx={{ cursor: 'pointer' }}
                                        aria-controls="menu-popular-card"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    />
                                </IconButton>
                            </Stack>
                            <Menu
                                id="menu-popular-card"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                variant="selectedMenu"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <MenuItem onClick={handleClose}>Hoy</MenuItem>
                                <MenuItem onClick={handleClose}>Este Mes</MenuItem>
                                <MenuItem onClick={handleClose}>Este Año</MenuItem>
                            </Menu>

                            <ServiceAreaChartCard />
                            <Box>
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                        Community Manager
                                    </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                                        <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                            $3,240
                                        </Typography>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '5px',
                                                bgcolor: 'success.light',
                                                color: 'success.dark',
                                                ml: 2
                                            }}
                                        >
                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                        </Avatar>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                    15% Crecimiento
                                </Typography>
                                <Divider sx={{ my: 1.5 }} />
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                        Branding
                                    </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                                        <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                            $2,850
                                        </Typography>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '5px',
                                                bgcolor: 'success.light',
                                                color: 'success.dark',
                                                marginLeft: 1.875
                                            }}
                                        >
                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                        </Avatar>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                    12% Crecimiento
                                </Typography>
                                <Divider sx={{ my: 1.5 }} />
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                        Creadores UGC
                                    </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                                        <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                            $1,920
                                        </Typography>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '5px',
                                                bgcolor: 'orange.light',
                                                color: 'orange.dark',
                                                ml: 2
                                            }}
                                        >
                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                        </Avatar>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: 'orange.dark' }}>
                                    8% Disminución
                                </Typography>
                                <Divider sx={{ my: 1.5 }} />
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                        Video
                                    </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                                        <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                            $2,450
                                        </Typography>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '5px',
                                                bgcolor: 'success.light',
                                                color: 'success.dark',
                                                ml: 2
                                            }}
                                        >
                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                        </Avatar>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                    18% Crecimiento
                                </Typography>
                                <Divider sx={{ my: 1.5 }} />
                                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                        Fotografía
                                    </Typography>
                                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                                        <Typography variant="subtitle1" sx={{ color: 'inherit' }}>
                                            $1,680
                                        </Typography>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '5px',
                                                bgcolor: 'success.light',
                                                color: 'success.dark',
                                                ml: 2
                                            }}
                                        >
                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                        </Avatar>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                    10% Crecimiento
                                </Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            Ver Todos
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
}

PopularServicesCard.propTypes = { isLoading: PropTypes.bool };
