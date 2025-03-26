import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class KpiCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() change: string = '';
  @Input() target: string = '';
  @Input() variant: 'success' | 'danger' | 'warning' | 'info' = 'success';
  @Input() icon?: string;

  getChangeColor() {
    if (this.variant === 'danger') {
      return 'var(--brand-colors-danger-500)';
    } else if (this.variant === 'success') {
      return 'var(--brand-colors-success-500)';
    }
    return 'inherit';
  }
}
