import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../../compound/navigation/navigation.component';
import { HeaderComponent } from '../../compound/header/header.component';
import { ThemeService, ThemeType } from '../../../services/theme.service';


@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, HeaderComponent],
})
export class LayoutComponent {

  constructor(private themeService: ThemeService) {}

    ngOnInit() {}

    switchTheme(event: Event) {
      const target = event.target as HTMLSelectElement;
      if (target && (target.value === 'riministreet' || target.value === 'servicenow')) {
        this.themeService.setTheme(target.value as ThemeType);
      }
    }

}

