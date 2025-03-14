import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService, ThemeType } from './services/theme.service';

import { ButtonComponent } from "./components/atomic/button/button.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ButtonComponent,
  ],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  switchTheme(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target && (target.value === 'riministreet' || target.value === 'servicenow')) {
      this.themeService.setTheme(target.value as ThemeType);
    }
  }

  title = 'inventory-manager';
}
