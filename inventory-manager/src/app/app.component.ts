import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/compound/navigation/navigation.component';
import { HeaderComponent } from './components/compound/header/header.component';
import { BreadcrumbComponent } from './components/atomic/breadcrumb/breadcrumb.component';
import { ThemeService, ThemeType } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, NavigationComponent, HeaderComponent, BreadcrumbComponent],
})
export class AppComponent {
  title = 'inventory-manager';
  pageTitle: string = 'Test Page Title';

  constructor(private themeService: ThemeService) {}

  switchTheme(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target && (target.value === 'riministreet' || target.value === 'servicenow')) {
      this.themeService.setTheme(target.value as ThemeType);
    }
  }

  updatePageTitle(title: string) {
    console.log('Received title in LayoutComponent:', title);
    this.pageTitle = title;
  }
}
