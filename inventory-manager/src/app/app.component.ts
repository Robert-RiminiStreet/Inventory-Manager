import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/compound/navigation/navigation.component';
import { HeaderComponent } from './components/compound/header/header.component';
import { BreadcrumbComponent } from './components/atomic/breadcrumb/breadcrumb.component';
import { ThemeService, ThemeType } from './services/theme.service';
import { PageTitleService } from './services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavigationComponent,
    HeaderComponent,
    BreadcrumbComponent,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  pageTitle: string = '';
  subtitle: string = '';
  selectedTheme: ThemeType = 'riministreet';
  breadcrumbItems: any[] = [];

  constructor(
    private themeService: ThemeService,
    private pageTitleService: PageTitleService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pageTitleService.title$.subscribe((title: string) => {
      this.pageTitle = title;
      this.cdRef.detectChanges();
    });

    this.pageTitleService.subtitle$.subscribe((subtitle: string) => {
      this.subtitle = subtitle;
      this.cdRef.detectChanges();
    });

    this.pageTitleService.breadcrumb$.subscribe(breadcrumbs => {
      this.breadcrumbItems = breadcrumbs;
    });
  }

  switchTheme(event: Event) {
    const target = event.target as HTMLSelectElement;
    const theme = target?.value;

    if (theme && (theme === 'riministreet' || theme === 'servicenow')) {
      this.selectedTheme = theme as ThemeType;
      this.themeService.setTheme(this.selectedTheme);
    }
  }

  updatePageTitle(title: any) {
    this.pageTitle = title;
  }
}
