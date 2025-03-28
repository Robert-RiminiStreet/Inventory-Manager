import { ChartData } from 'chart.js';
import { getChartColors } from '../../src/app/chart-config';

export function getRevenueImpactData(): ChartData<'bar'> {
  const colors = getChartColors();
  return {
    labels: ['Feb 13', 'Feb 15', 'Feb 17', 'Feb 19', 'Feb 21', 'Feb 23', 'Feb 25', 'Feb 27', 'Feb 29', 'Feb 31'],
    datasets: [
      {
        label: 'Revenue at risk',
        data: [10, 20, 30, 40, 50, 40, 30, 60, 80, 100],
        backgroundColor: colors['red'],
        borderColor: colors['red'],
        borderWidth: 1
      }
    ]
  };
}

export function getCostOptimizationData(): ChartData<'bar'> {
  const colors = getChartColors();
  return {
    labels: ['Optimized Cost', 'Current Cost'],
    datasets: [
      {
        label: 'Optimized Cost',
        data: [40, 0],
        backgroundColor: colors['blue'],
        borderColor: colors['blue'],
        borderWidth: 1
      },
      {
        label: 'Current Cost',
        data: [0, 40],
        backgroundColor: colors['green'],
        borderColor: colors['green'],
        borderWidth: 1
      }
    ]
  };
}
