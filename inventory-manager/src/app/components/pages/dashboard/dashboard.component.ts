import { Component } from '@angular/core';
import { AlertComponent } from '../../atomic/alert/alert.component';

@Component({
  selector: 'app-dashboard',
  imports: [AlertComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
