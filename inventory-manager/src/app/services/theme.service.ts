import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type ThemeType = 'riministreet' | 'servicenow';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeLinkId = 'theme-link';
  private themeLoadedSubject = new BehaviorSubject<boolean>(false);
  public themeLoaded$ = this.themeLoadedSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
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
    let themeLink = document.getElementById(this.themeLinkId) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = this.themeLinkId;
      themeLink.rel = 'stylesheet';
      themeLink.type = 'text/css';
      document.head.appendChild(themeLink);
    }

    themeLink.onload = () => {
      const verifyVariablesLoaded = () => {
        const blue = getComputedStyle(document.documentElement).getPropertyValue('--Chart-Blue');
        if (blue && blue.trim()) {
          this.themeLoadedSubject.next(true);
        } else {
          requestAnimationFrame(verifyVariablesLoaded);
        }
      };

      verifyVariablesLoaded();
    };

    themeLink.href = themePath;
  }
}
