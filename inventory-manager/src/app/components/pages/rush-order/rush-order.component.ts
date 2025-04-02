import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../../../services/page-title.service';
import { SkuDataService } from '../../../services/sku-data.service';
import { revenueImpactChartOptions, costOptimizationChartOptions } from '../../../chart-config';
import { getRevenueImpactData, getCostOptimizationData } from '../../../../../public/data/revenue-impact-by-sku.data';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from '../../atomic/card/kpi/kpi-card.component';
import { ChartComponent } from '../../atomic/chart/chart.component';
import { ButtonComponent } from '../../atomic/button/button.component';


@Component({
  selector: 'app-rush-order',
  standalone: true,
  imports: [CommonModule, KpiCardComponent, ChartComponent, ButtonComponent],
  templateUrl: './rush-order.component.html',
  styleUrls: ['./rush-order.component.scss']
})
export class RushOrderComponent implements OnInit {
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

  actions = [
    {
      title: 'Expedite Re-order with Current Vendor',
      details: 'Request overnight shipping and partial shipments',
      impact: '50% stocker risk reduction'
    },
    {
      title: 'Optimize Warehouse and Distribution Allocation',
      details: 'Shift low demand stock to high demand areas',
      impact: '30% improved availability'
    },
    {
      title: 'Enable Pre-order and Customer Notifications',
      details: 'Enable pre-orders and realtime stock alerts',
      impact: '20% Sales retention'
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
    const skuId = this.route.snapshot.paramMap.get('id');

    if (skuId) {
      this.skuDataService.getSkuData(skuId).subscribe(data => {
        if (data) {
          this.skuData = data;
          this.pageTitleService.setTitle(data?.title);
          this.pageTitleService.setSubtitle('Last update 5 minutes ago');
        }
      });
    }

    this.revenueImpactChartData = getRevenueImpactData();
    this.costOptimizationChartData = getCostOptimizationData();

    this.pageTitleService.setBreadcrumbs([
      { label: 'Dashboard', link: '/dashboard' },
      { label: 'Alert Details', link: '/alert-details' },
      { label: 'Rush Order' }
    ]);
  }

  getRiskColorClass(score: number): string {
    if (score >= 75) {
      return 'var(--brand-colors-danger)';  // Red for high risk
    } else if (score >= 50) {
      return 'var(--brand-colors-warning)'; // Yellow for medium risk
    } else {
      return 'var(--brand-colors-success)'; // Green for low risk
    }
  }

  getTextColorClass(score: number): string {
    if (score >= 75) {
      return 'var(--font-color-body-default-light)';  // Light text for high risk
    } else if (score >= 50) {
      return 'var(--font-color-body-default-dark)';  // Dark text for medium risk
    } else {
      return 'var(--font-color-body-default-light)'; // Light text for low risk
    }
  }

  onApprove(): void {
    console.log('Approval Clicked!');
  }
}
