import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeType = 'riministreet' | 'servicenow';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeLinkId = 'theme-link';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.setTheme('riministreet');
    }
  }

  setTheme(theme: ThemeType) {
    if (isPlatformBrowser(this.platformId)) {
      const themePath = `themes/${theme}.css`;
      this.loadTheme(themePath);
    }
  }

  private loadTheme(themePath: string) {
    if (isPlatformBrowser(this.platformId)) {
      let themeLink = document.getElementById(this.themeLinkId) as HTMLLinkElement;

      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = this.themeLinkId;
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
      }

      themeLink.href = themePath;
    }
  }
}
