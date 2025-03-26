import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [ButtonComponent, CommonModule]
})
export class AlertComponent {
  @Input() variant: string = 'primary';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() impact: string = '';
  @Input() icon: string = '';
  @Input() buttonText: string = 'Dismiss';
  @Input() dismissible: boolean = false;

  resolveAction() {
    console.log('Alert resolved');
  }
}
