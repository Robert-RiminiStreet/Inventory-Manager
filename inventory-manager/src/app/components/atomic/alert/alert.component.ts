import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent],
})
export class AlertComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' = 'primary';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() impact: string = '';
  @Input() icon: string | null = null;
  @Input() dismissible: boolean = false;
  @Input() buttonText: string = 'Resolve';

  resolveAction() {
    console.log('Resolve button clicked');
  }
}
