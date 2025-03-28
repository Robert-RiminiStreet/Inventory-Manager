import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuDataService {
  constructor() {}

  getSkuData(skuId: string) {
    const mockData: { [key: string]: {
      title: string;
      issueDetails: string;
      riskDetails: string;
      complianceDetails: string;
      kpis: { title: string; value: string; change: string; variant: string }[];
      lastAuditDate: string;
      vendorRiskScore: number;
      complianceStatus: string;
    } } = {
      'SKU-123': {
        title: 'Stockout Risk: SKU-123',
        issueDetails: 'Item SKU-123 only has 20% left below the re-order threshold of 45%, stockout is expected due to an upcoming flash sale',
        riskDetails: 'Potential $45,000 revenue loss, order cancellations, and customer dissatisfaction',
        complianceDetails: 'Primary SKU-123 vendor has a risk score of 78 due to logistical delays and pending audit',
        kpis: [
          { title: 'Days to Stockout (DTS)', value: '3 Days', change: '20%', variant: 'danger' },
          { title: 'Revenue at Risk', value: '$45,000', change: 'Next 7 Days Impact', variant: 'info' },
          { title: 'Production Impact', value: '3 Lines', change: 'Potential Disruption', variant: 'danger' },
          { title: 'AI Confidence', value: '95%', change: 'Advisory Accuracy', variant: 'success' }
        ],
        lastAuditDate: 'May 15, 2024',
        vendorRiskScore: 78,
        complianceStatus: 'Pending',
      },
      'SKU-456': {
        title: 'Stockout Risk: SKU-456',
        issueDetails: 'Item SKU-456 is running low on stock due to high demand and delayed production',
        riskDetails: 'Potential $50,000 revenue loss, late shipments, and customer dissatisfaction',
        complianceDetails: 'Primary SKU-456 vendor has a risk score of 85 due to quality control issues',
        kpis: [
          { title: 'Days to Stockout (DTS)', value: '2 Days', change: '10%', variant: 'danger' },
          { title: 'Revenue at Risk', value: '$50,000', change: 'Next 7 Days Impact', variant: 'info' },
          { title: 'Production Impact', value: '5 Lines', change: 'Severe Impact', variant: 'danger' },
          { title: 'AI Confidence', value: '85%', change: 'Advisory Accuracy', variant: 'warning' }
        ],
        lastAuditDate: 'April 12, 2024',
        vendorRiskScore: 65,
        complianceStatus: 'Pending',
      }
    };

    return of(mockData[skuId] || null);
  }
}
