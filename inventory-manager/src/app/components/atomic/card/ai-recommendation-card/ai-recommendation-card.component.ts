import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ai-recommendation-card',
  templateUrl: './ai-recommendation-card.component.html',
  styleUrls: ['./ai-recommendation-card.component.scss'],
  imports: [ButtonComponent, CommonModule]
})
export class AiRecommendationCardComponent {
  @Input() recommendations: any[] = [];

  constructor(private router: Router) {}

  getColorForBall(variant: string) {
    switch (variant) {
      case 'danger':
        return 'var(--brand-colors-danger-500)';
      case 'warning':
        return 'var(--brand-colors-warning)';
      case 'success':
        return 'var(--brand-colors-success-500)';
      default:
        return 'var(--brand-colors-gray-500)';
    }
  }

  selectRecommendation(recommendation: any) {
    const skuId = recommendation.id;
    this.router.navigate([`/rush-order/${skuId}`]);
  }
}
