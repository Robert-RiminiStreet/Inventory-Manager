import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  title = 'inventory-manager';
}
