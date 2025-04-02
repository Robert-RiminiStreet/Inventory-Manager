import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AlertDetailsComponent } from './components/pages/alert-details/alert-details.component';
import { RushOrderComponent } from './components/pages/rush-order/rush-order.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard', title: 'Dashboard' } },
  { path: 'alert-details/:id', component: AlertDetailsComponent, data: { breadcrumb: 'Alert Details', title: 'Alert Details' } },
  { path: 'rush-order/:id', component: RushOrderComponent, data: { breadcrumb: 'Rush Order', title: 'Rush Order' } }
];