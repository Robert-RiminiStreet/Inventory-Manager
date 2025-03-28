import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AlertDetailsComponent } from './components/pages/alert-details/alert-details.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { breadcrumb: 'Dashboard', title: 'Dashboard' },
  },
  {
    path: 'alert-details/:sku',
    component: AlertDetailsComponent,
    data: { breadcrumb: 'Alert Details', title: 'Alert Details' },
  }
];