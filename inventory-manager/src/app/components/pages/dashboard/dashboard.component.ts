import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from '../../atomic/alert/alert.component';
import { PageTitleService } from '../../../services/page-title.service';
import { KpiCardComponent } from '../../atomic/card/kpi/kpi-card.component';
import { DataTableComponent } from '../../atomic/data-table/data-table.component';
import { DataService } from '../../../services/data.service';
import { AiOptimizePlanCardComponent } from '../../atomic/card/ai-optimize-plan/ai-optimize-plan-card.component';
import { inventoryHealthData } from '../../../../../public/data/inventory-health.data';
import { ChartComponent } from '../../atomic/chart/chart.component';
import { getChartColors } from '../../../chart-config';
import { ThemeService } from '../../../services/theme.service';
import { getDemandForecastData } from '../../../../../public/data/demand-forecast.data';
import { alertsData } from '../../../../../public/data/alerts.data';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AlertComponent,
    RouterModule,
    KpiCardComponent,
    DataTableComponent,
    AiOptimizePlanCardComponent,
    ChartComponent,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

export class DashboardComponent implements OnInit {
  stockData: any[] = [];
  colors: any;
  lineChartData: any;
  barChartData: any;
  alerts = alertsData;

  demandForecastChartData = getDemandForecastData;

  demandForecastChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Month' }
      },
      y: {
        title: { display: true, text: 'Incidents' }
      }
    }
  };

  barChartOptions = {
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

      },
      y: {
        title: { text: 'Millions', display: true }
      }
    }
  };

  constructor(
    private pageTitleService: PageTitleService,
    private dataService: DataService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('Dashboard');
    this.pageTitleService.setSubtitle(
      'Pending Transfers: <strong>10</strong>  Completed Transfers: <strong>35</strong>'
    );

    this.dataService.getStockData().subscribe((data) => {
      this.stockData = data;
    });

    this.themeService.themeLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.initializeCharts();
      }
    });
  }

  private initializeCharts(): void {
    this.colors = getChartColors();
    console.log('[ChartColors]', this.colors);

    const [itDataset, hrDataset] = inventoryHealthData.datasets;

    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56],
          label: 'Sales',
          borderColor: this.colors.blue,
          fill: false
        }
      ]
    };

    this.barChartData = {
      labels: inventoryHealthData.labels,
      datasets: [
        {
          ...itDataset,
          backgroundColor: this.colors.red,
          borderWidth: 1
        },
        {
          ...hrDataset,
          backgroundColor: this.colors.blue,
          borderWidth: 1
        }
      ]
    };
  }
}
