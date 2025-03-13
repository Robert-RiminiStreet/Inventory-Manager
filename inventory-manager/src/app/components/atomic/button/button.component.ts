import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'disabled' | 'tertiary' = 'secondary';
  @Input() size: 'sm' | 'default' | 'large' = 'default';
  @Input() icon?: string;
  @Input() text!: string;
}
