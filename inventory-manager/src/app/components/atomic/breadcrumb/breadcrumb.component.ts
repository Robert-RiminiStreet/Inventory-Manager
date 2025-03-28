import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageTitleService } from '../../../services/page-title.service';

interface RouteData {
  breadcrumb?: string;
  title?: string;
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: any[] = [];
  pageTitle: string = '';
  subtitle: string = '';

  @Output() pageTitleChange = new EventEmitter<string>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumb();
      this.setPageTitle(this.activatedRoute.root);
    });

    this.pageTitleService.title$.subscribe(title => {
      this.pageTitle = title;
      this.pageTitleChange.emit(this.pageTitle);
    });

    this.pageTitleService.subtitle$.subscribe(subtitle => {
      this.subtitle = subtitle;
    });
  }

  private updateBreadcrumb(): void {
    const pathSegments = this.getRouteSegments(this.activatedRoute.root);

    if (this.isDashboard()) {
      this.breadcrumbItems = [{ label: 'Dashboard', icon: 'bi-house-door', path: '/' }];
    } else {
      this.breadcrumbItems = [
        { label: 'Dashboard', icon: 'bi-house-door', path: '/' },
        ...pathSegments.map(segment => ({
          label: segment,
          path: `/${segment.toLowerCase().replace(/\s+/g, '-')}`
        }))
      ];
    }
  }

  private getRouteSegments(route: ActivatedRoute): any[] {
    let segments: any[] = [];
    if (route.firstChild) {
      segments = segments.concat(this.getRouteSegments(route.firstChild));
    } else {
      const routeData = route.snapshot.data as RouteData;
      if (routeData && routeData.breadcrumb) {
        segments.push(routeData.breadcrumb);
      }
    }
    return segments;
  }

  private setPageTitle(route: ActivatedRoute): void {
    if (this.isDashboard()) {
      this.pageTitleService.setTitle('Dashboard');
    } else {
      if (route.firstChild) {
        this.setPageTitle(route.firstChild);
      } else {
        const routeData = route.snapshot.data as RouteData;
        if (routeData && routeData.title) {
          this.pageTitleService.setTitle(routeData.title);
        }
      }
    }
  }

  isDashboard(): boolean {
    const isDashboard = this.router.url === '/';
    return isDashboard;
  }
}
