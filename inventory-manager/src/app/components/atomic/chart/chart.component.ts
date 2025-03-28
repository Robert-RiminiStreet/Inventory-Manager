import { Component,Input,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { Chart, registerables, ChartData, ChartOptions } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  template: `<div class="chart-wrapper">
              <canvas #chartCanvas></canvas>
            </div>`,
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() chartData!: ChartData;
  @Input() chartType: any = 'bar';
  @Input() chartOptions?: ChartOptions;

  chartInstance!: Chart;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      if (!this.chartData) return;

      this.chartInstance = new Chart(this.chartCanvas.nativeElement, {
        type: this.chartType,
        data: this.chartData,
        options: this.chartOptions,
      });
    });
  }

}
