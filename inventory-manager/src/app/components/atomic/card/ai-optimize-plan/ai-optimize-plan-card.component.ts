import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-optimized-plan-card',
  standalone: true,
  templateUrl: './ai-optimize-plan-card.component.html',
  styleUrls: ['./ai-optimize-plan-card.component.scss'],
  imports: [ButtonComponent, CommonModule]
})
export class AiOptimizePlanCardComponent implements OnInit {

  plans = [
    {
      title: 'Aging Inventory Analysis',
      skuStatus: '5 SKUs below safety threshold',
      inventoryIndex: 'Inventory Aging Index (IAI): 186.51'
    },
    {
      title: 'Seasonal Preparation',
      skuStatus: 'Increase buffer for holiday season',
      inventoryIndex: 'Seasonal Stock Readiness Score (SSRS): 0.13'
    },
    {
      title: 'Cost Optimization',
      skuStatus: 'Reduce safety stock for stable items',
      inventoryIndex: 'Inventory Carrying Cost Efficiency (ICCE): 2.46'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  implementPlan(plan: any): void {
    console.log('Implementing plan:', plan);
  }
}
