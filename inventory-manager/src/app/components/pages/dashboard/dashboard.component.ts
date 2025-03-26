import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '../../atomic/alert/alert.component';
import { PageTitleService } from '../../../services/page-title.service';
import { KpiCardComponent } from '../../atomic/card/kpi/kpi-card.component';
import { DataTableComponent } from '../../atomic/data-table/data-table.component';
import { DataService } from '../../../services/data.service';
import { AiOptimizePlanCardComponent } from '../../atomic/card/ai-optimize-plan/ai-optimize-plan-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [AlertComponent, KpiCardComponent, DataTableComponent, AiOptimizePlanCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stockData: any[] = [];

  constructor(private pageTitleService: PageTitleService, private dataService: DataService) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('Dashboard');
    this.pageTitleService.setSubtitle('Pending Transfers: 10  Completed Transfers: 35');
    this.dataService.getStockData().subscribe((data) => {
      this.stockData = data;
    });
  }
}
