import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import Chart from 'react-apexcharts';

// project imports
import serviceChartOptions from '../chart-data/service-area-chart';
import useConfig from '../hooks/useConfig';

// ===========================|| DASHBOARD DEFAULT - SERVICE AREA CHART CARD ||=========================== //

export default function ServiceAreaChartCard() {
    const theme = useTheme();
    const palette = theme.vars?.palette ?? theme.palette;
    const {
        state: { fontFamily }
    } = useConfig();

    const secondary800 = palette.secondary[800];

    const [chartOptions, setChartOptions] = useState(serviceChartOptions);
    const [series] = useState([{ data: [0, 15, 10, 50, 30, 40, 25] }]);

    useEffect(() => {
        setChartOptions({
            ...serviceChartOptions,
            chart: { ...serviceChartOptions.chart, fontFamily: fontFamily },
            colors: [secondary800],
            fill: {
                gradient: {
                    colorStops: [
                        [
                            { offset: 0, color: secondary800, opacity: 0.4 },
                            { offset: 100, color: secondary800, opacity: 0.1 }
                        ]
                    ]
                }
            },
            theme: { mode: 'light' }
        });
    }, [fontFamily, secondary800]);

    return (
        <Card sx={{ bgcolor: 'secondary.light', mt: -1 }}>
            <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
                <Grid size={12}>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid>
                            <Typography variant="subtitle1" sx={{ color: 'secondary.dark' }}>
                                Community Manager
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="h4" sx={{ color: 'grey.800' }}>
                                $3,240
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Typography variant="subtitle2" sx={{ color: 'grey.800' }}>
                        15% Crecimiento
                    </Typography>
                </Grid>
            </Grid>
            <Chart options={chartOptions} series={series} type="area" height={95} />
        </Card>
    );
}
