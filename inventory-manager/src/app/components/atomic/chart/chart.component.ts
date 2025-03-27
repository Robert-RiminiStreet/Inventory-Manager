import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, BarController, LineController } from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  LineController
);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData: ChartData = { labels: [], datasets: [] };
  @Input() chartType: 'line' | 'bar' | 'pie' | 'doughnut' = 'line';
  @Input() chartOptions: ChartOptions = {};

  public chartLegend: boolean = true;
  public chartPlugins = [];

  constructor() {}

  ngOnInit(): void {

  }
}
