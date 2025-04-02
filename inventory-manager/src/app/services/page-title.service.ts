import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private titleSource = new BehaviorSubject<string>('');
  private subtitleSource = new BehaviorSubject<string>('');
  private breadcrumbSource = new BehaviorSubject<any[]>([]);

  title$ = this.titleSource.asObservable();
  subtitle$ = this.subtitleSource.asObservable();
  breadcrumb$ = this.breadcrumbSource.asObservable();

  private breadcrumbStack: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.updateBreadcrumb();
      this.setPageTitle();
    });
  }

  setTitle(title: string): void {
    this.titleSource.next(title);
  }

  setSubtitle(subtitle: string): void {
    this.subtitleSource.next(subtitle);
  }

  setBreadcrumbs(breadcrumbs: any[]): void {
    this.breadcrumbStack = breadcrumbs;
    this.breadcrumbSource.next(this.breadcrumbStack);
  }

  addBreadcrumb(breadcrumb: any): void {
    this.breadcrumbStack.push(breadcrumb);
    this.breadcrumbSource.next(this.breadcrumbStack);
  }

  removeBreadcrumb(): void {
    this.breadcrumbStack.pop();
    this.breadcrumbSource.next(this.breadcrumbStack);
  }

  private updateBreadcrumb(): void {
    const pathSegments: any[] = [];
    let route = this.activatedRoute.root;

    while (route.firstChild) {
      route = route.firstChild;

      if (route.snapshot.data['breadcrumb']) {
        pathSegments.push({
          label: route.snapshot.data['breadcrumb'],
          path: route.snapshot.url.map(segment => segment.path).join('/')
        });
      }
    }

    if (pathSegments.length === 0 || pathSegments[0].label !== 'Dashboard') {
      pathSegments.unshift({ label: 'Dashboard', path: '/dashboard' });
    }

    this.setBreadcrumbs(pathSegments);
  }

  private setPageTitle(): void {
    const routeData = this.activatedRoute.snapshot.firstChild?.data;
    const title = routeData?.['title'] || 'Default Page Title';
    this.setTitle(title);
  }
}
