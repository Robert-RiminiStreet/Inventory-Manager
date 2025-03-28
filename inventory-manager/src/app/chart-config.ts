import { ChartOptions } from 'chart.js';

export function getChartColors(): Record<string, string> {
  const styles = getComputedStyle(document.documentElement);

  return {
    blue: styles.getPropertyValue('--Chart-Blue').trim(),
    green: styles.getPropertyValue('--Chart-Green').trim(),
    grey: styles.getPropertyValue('--Chart-Grey').trim(),
    red: styles.getPropertyValue('--Chart-Red').trim(),
    yellow: styles.getPropertyValue('--Chart-Yellow').trim()
  };
}

export const revenueImpactChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'center' as const
    }
  },
  scales: {
    x: {
      title: { text: 'Date', display: true }
    },
    y: {
      title: { text: 'Revenue ($)', display: true },
      beginAtZero: true
    }
  }
};

export const costOptimizationChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const
    }
  },
  scales: {
    x: {
      title: { text: 'Cost Category', display: true }
    },
    y: {
      title: { text: 'Cost ($)', display: true },
      beginAtZero: true
    }
  }
};
