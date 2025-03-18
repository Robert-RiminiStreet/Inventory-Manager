import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'site-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user = {
    name: 'Jason',
    role: 'Inventory Manager',
    avatar: '/assets/user-avatar.jpg',
  };
}
