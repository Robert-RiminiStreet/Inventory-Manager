import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeType } from '../../../services/theme.service';

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

  constructor(private themeService: ThemeService) {}

  switchTheme(event: Event) {
    const selectedTheme = (event.target as HTMLSelectElement).value as ThemeType;
    this.themeService.setTheme(selectedTheme);
  }
}
