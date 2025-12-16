import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './components/EarningCard';
import PopularServicesCard from './components/PopularServicesCard';
import TotalCampaignsLineChartCard from './components/TotalCampaignsLineChartCard';
import NewClientsDarkCard from './ui-components/NewClientsDarkCard';
import TotalServicesLightCard from './ui-components/TotalServicesLightCard';
import ServiceGrowthBarChart from './components/ServiceGrowthBarChart';

import { gridSpacing } from './constants/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| LUX DASHBOARD ||============================== //

export default function Dashboard() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid size={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                        <TotalCampaignsLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                                <NewClientsDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                                <TotalServicesLightCard
                                    {...{
                                        isLoading: isLoading,
                                        total: 10,
                                        label: 'Servicios Activos',
                                        icon: <StorefrontTwoToneIcon fontSize="inherit" />
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <ServiceGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <PopularServicesCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
