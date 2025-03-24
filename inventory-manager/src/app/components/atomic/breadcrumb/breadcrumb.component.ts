import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface RouteData {
  breadcrumb?: string;
  title?: string;
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: string[] = [];
  currentRoute: string = '';
  pageTitle: string = '';

  @Output() pageTitleChange = new EventEmitter<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Router Event:', event);  // Log all router events to verify that they are firing
      this.updateBreadcrumb();
      this.setPageTitle(this.activatedRoute.root);
    });
  }


  private updateBreadcrumb(): void {
    this.breadcrumbItems = [];
    this.breadcrumbItems.push('Home');
    this.currentRoute = this.router.url;
    const pathSegments = this.getRouteSegments(this.activatedRoute.root);
    this.breadcrumbItems = [...this.breadcrumbItems, ...pathSegments];
  }

  private getRouteSegments(route: ActivatedRoute): string[] {
    let segments: string[] = [];
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
    if (route.firstChild) {
      this.setPageTitle(route.firstChild);
    } else {
      const routeData = route.snapshot.data as RouteData;
      if (routeData && routeData.title) {
        this.pageTitle = routeData.title;
        console.log('Page Title Set:', this.pageTitle);  // Log to verify the title
        this.pageTitleChange.emit(this.pageTitle);  // Emit the pageTitle to the parent component
      } else {
        console.log('No title in route data');  // If no title is found
      }
    }
  }

  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }
}
