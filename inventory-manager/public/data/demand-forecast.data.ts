import { ChartData } from 'chart.js';
import { getChartColors } from '../../src/app/chart-config';

export function getDemandForecastData(): ChartData<'line'> {
  const colors = getChartColors();

  return {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'No. of open incidents',
        data: [650, 620, 610, 580, 560, 550, 520, 500, 490, 470],
        borderColor: colors['blue'],
        fill: false,
        tension: 0.4
      },
      {
        label: 'No. of close incidents',
        data: [300, 320, 350, 370, 450, 500, 550, 500, 460, 420],
        borderColor: colors['red'],
        fill: false,
        tension: 0.4
      },
      {
        label: 'Average of open incidents',
        data: [450, 470, 480, 460, 480, 510, 500, 490, 500, 500],
        borderColor: colors['green'],
        fill: false,
        tension: 0.4
      }
    ]
  };
}
