import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageTitleService } from '../../../services/page-title.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbItems: any[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.breadcrumb$.subscribe((breadcrumbs) => {
      this.breadcrumbItems = breadcrumbs;
    });

    this.router.events.subscribe(() => {
      this.updateBreadcrumb();
    });
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

    this.pageTitleService.setBreadcrumbs(pathSegments);
  }

  handleBreadcrumbClick(path: string): void {
    this.router.navigate([path]);
  }
}
