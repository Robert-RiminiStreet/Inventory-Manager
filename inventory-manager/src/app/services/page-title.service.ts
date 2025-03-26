import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private titleSource = new Subject<string>();
  private subtitleSource = new Subject<string>();

  title$ = this.titleSource.asObservable();
  subtitle$ = this.subtitleSource.asObservable();

  setTitle(title: string): void {
    this.titleSource.next(title);
  }

  setSubtitle(subtitle: string): void {
    this.subtitleSource.next(subtitle);
  }
}
