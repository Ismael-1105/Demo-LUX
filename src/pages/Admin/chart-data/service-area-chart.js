// ==============================|| DASHBOARD - SERVICE AREA CHART ||============================== //

const chartOptions = {
    chart: {
        id: 'service-chart',
        sparkline: { enabled: true },
        background: 'transparent',
        toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 1 },
    yaxis: { labels: { show: false } },
    tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: { title: { formatter: () => 'Ingresos ' } },
        marker: { show: false }
    }
};

export default chartOptions;
