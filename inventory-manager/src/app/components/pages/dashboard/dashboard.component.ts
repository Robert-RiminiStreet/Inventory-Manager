import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '../../atomic/alert/alert.component';
import { PageTitleService } from '../../../services/page-title.service';
import { KpiCardComponent } from '../../atomic/card/kpi/kpi-card.component';
import { DataTableComponent } from '../../atomic/data-table/data-table.component';
import { DataService } from '../../../services/data.service';
import { AiOptimizePlanCardComponent } from '../../atomic/card/ai-optimize-plan/ai-optimize-plan-card.component';
import { ChartComponent } from '../../atomic/chart/chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [AlertComponent, KpiCardComponent, DataTableComponent, AiOptimizePlanCardComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stockData: any[] = [];

  lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
        label: 'Sales',
        borderColor: '#42A5F5',
        fill: false
      }
    ]
  };

  barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        borderColor: '#ffffff',
        borderWidth: 1
      }
    ]
  };

  lineChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { text: 'Months', display: true }
      },
      y: {
        title: { text: 'Sales', display: true }
      }
    }
  };

  barChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { text: 'Colors', display: true }
      },
      y: {
        title: { text: 'Value', display: true }
      }
    }
  };

  constructor(private pageTitleService: PageTitleService, private dataService: DataService) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('Dashboard');
    this.pageTitleService.setSubtitle('Pending Transfers: <strong>10</strong>  Completed Transfers: <strong>35</strong>');
    this.dataService.getStockData().subscribe((data) => {
      this.stockData = data;
    });
  }
}
