import { Component, Input, ChangeDetectorRef } from '@angular/core';
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
  @Input() selectedTheme: ThemeType = 'riministreet';
  logoSrc: string = '/client-logo.svg';

  user = {
    name: 'Jason',
    role: 'Inventory Manager',
    avatar: '/assets/user-avatar.jpg',
  };

  constructor(private themeService: ThemeService, private cdRef: ChangeDetectorRef) {}

  switchTheme(event: Event) {
    const selectedTheme = (event.target as HTMLSelectElement).value as ThemeType;
    this.themeService.setTheme(selectedTheme);
    this.selectedTheme = selectedTheme;
    this.updateLogo(selectedTheme);
    this.cdRef.detectChanges();
  }

  updateLogo(theme: ThemeType) {
    if (theme === 'servicenow') {
      this.logoSrc = '/servicenow-logo.svg';
    } else {
      this.logoSrc = '/client-logo.svg';
    }
  }
}
