import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from './MainCard';
import TotalIncomeCard from './Skeleton/TotalIncomeCard';
import { withAlpha } from '../utils/colorUtils';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => {
    const palette = theme.vars?.palette ?? theme.palette;
    return {
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: `linear-gradient(210.04deg, ${palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
            borderRadius: '50%',
            top: -30,
            right: -180
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            width: 210,
            height: 210,
            background: `linear-gradient(140.9deg, ${palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
            borderRadius: '50%',
            top: -160,
            right: -130
        }
    };
});

export default function TotalServicesLightCard({ isLoading, total, icon, label }) {
    const theme = useTheme();
    const palette = theme.vars?.palette ?? theme.palette;

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.largeAvatar,
                                            borderRadius: 2,
                                            bgcolor: label === 'Servicios Activos' ? withAlpha(palette.error.light, 0.25) : 'warning.light',
                                            color: label === 'Servicios Activos' ? 'error.dark' : 'warning.dark'
                                        }}
                                    >
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ py: 0, mt: 0.45, mb: 0.45 }}
                                    primary={<Typography variant="h4">{total}</Typography>}
                                    secondary={
                                        <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
                                            {label}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
}

TotalServicesLightCard.propTypes = { isLoading: PropTypes.bool, total: PropTypes.number, icon: PropTypes.node, label: PropTypes.string };
