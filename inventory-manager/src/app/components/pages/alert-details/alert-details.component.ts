import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../../services/page-title.service';
import { SkuDataService } from '../../../services/sku-data.service';
import { KpiCardComponent } from '../../atomic/card/kpi/kpi-card.component';
import { AiRecommendationCardComponent } from '../../atomic/card/ai-recommendation-card/ai-recommendation-card.component';
import { ChartComponent } from '../../atomic/chart/chart.component';
import { getRevenueImpactData, getCostOptimizationData } from '../../../../../public/data/revenue-impact-by-sku.data';
import { revenueImpactChartOptions, costOptimizationChartOptions } from '../../../chart-config';

@Component({
  selector: 'app-alert-details',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, AiRecommendationCardComponent, ChartComponent],
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.scss']
})
export class AlertDetailsComponent implements OnInit {
  skuData: any;
  recommendations = [
    {
      title: 'Rush Order',
      skuStatus: 'Rush order for SKU-123 to be sent out from',
      impact: '$45,000 Production Line B at risk',
      warehouse: 'Warehouse A',
      variant: 'danger'
    },
    {
      title: 'Inventory Transfer',
      skuStatus: 'Initiate inventory transfer for SKU-123 from',
      impact: '$32,000 potential sales impact',
      warehouse: 'Warehouse B',
      variant: 'warning'
    }
  ];

  revenueImpactChartData: any;
  costOptimizationChartData: any;

  revenueImpactChartOptions = revenueImpactChartOptions;
  costOptimizationChartOptions = costOptimizationChartOptions;

  constructor(
    private route: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private skuDataService: SkuDataService
  ) {}

  ngOnInit(): void {
    const skuId = this.route.snapshot.paramMap.get('sku');

    if (skuId) {
      this.skuDataService.getSkuData(skuId).subscribe(data => {
        this.skuData = data;
        this.pageTitleService.setTitle(data?.title);
        this.pageTitleService.setSubtitle('Last update 5 minutes ago');
      });
    } else {
      console.error('SKU ID is missing');
    }

    this.revenueImpactChartData = getRevenueImpactData();
    this.costOptimizationChartData = getCostOptimizationData();
  }

  getRiskColor(score: number) {
    if (score >= 75) {
      return 'var(--brand-colors-danger-500)';
    } else if (score >= 50) {
      return 'var(--brand-colors-info)';
    } else {
      return 'var(--brand-colors-success-500)';
    }
  }
}
