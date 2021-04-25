import dynamic from 'next/dynamic';
import { Box, Text, theme } from '@chakra-ui/react';

const ChartApex = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options ={
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-18T00:00:00.000Z',
      '2021-04-19T00:00:00.000Z',
      '2021-04-20T00:00:00.000Z',
      '2021-04-21T00:00:00.000Z',
      '2021-04-22T00:00:00.000Z',
      '2021-04-23T00:00:00.000Z',
      '2021-04-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

interface ChartProps {
  children: string;
}

export default function Chart({ children }: ChartProps) {
  return (
    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
      <Text>{children}</Text>

      <ChartApex options={options}  series={series} type="area" height={160} />
    </Box>
  );
}