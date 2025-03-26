import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageTitleService } from './services/page-title.service';
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
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    NavigationComponent,
    HeaderComponent,
    BreadcrumbComponent]
})
export class AppComponent implements OnInit {
  pageTitle: string = '';
  subtitle: string = '';
  selectedTheme: ThemeType = 'riministreet';

  constructor(
    private themeService: ThemeService,
    private pageTitleService: PageTitleService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pageTitleService.title$.subscribe(title => {
      this.pageTitle = title;
      this.cdRef.detectChanges();
    });

    this.pageTitleService.subtitle$.subscribe(subtitle => {
      this.subtitle = subtitle;
      this.cdRef.detectChanges();
    });
  }

  switchTheme(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target && (target.value === 'riministreet' || target.value === 'servicenow')) {
      this.selectedTheme = target.value as ThemeType;
      this.themeService.setTheme(this.selectedTheme);
    }
  }

  updatePageTitle(title: string) {
    this.pageTitle = title;
  }
}
