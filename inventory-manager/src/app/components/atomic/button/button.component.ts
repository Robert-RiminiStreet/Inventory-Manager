import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'disabled' | 'tertiary' = 'secondary';
  @Input() size: 'sm' | 'default' | 'large' = 'default';
  @Input() icon?: string;
  @Input() text!: string;
  @Input() fullWidth = false;

  @HostBinding('class.w-100') get isFullWidth() {
    return this.fullWidth;
  }

  @HostBinding('class') get buttonClasses() {
    return `btn ${this.variant} ${this.size}`;
  }
}
