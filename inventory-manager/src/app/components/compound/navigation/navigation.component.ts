import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../atomic/button/button.component';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
})
export class NavigationComponent implements OnInit {
  isCollapsed = false;
  collapseBreakpoint = 768; // px

  quickActions = ['Stockout Risks', 'Pending Orders', 'What-if Analysis', 'Safety Stock'];

  navItems = [
    { label: 'Dashboard', icon: 'bi-house', badge: 12, active: false },
    {
      label: 'Inventory Management',
      icon: 'bi-boxes',
      expanded: false,
      active: false,
      children: [{ label: 'View All', active: false }],
    },
    {
      label: 'Inventory & Logistics',
      icon: 'bi-truck',
      expanded: false,
      active: false,
      children: [{ label: 'View All', active: false }],
    },
    {
      label: 'Other',
      icon: 'bi-grid',
      expanded: false,
      active: false,
      children: [{ label: 'View All', active: false }],
    },
    { label: 'Pins', icon: 'bi-pin', badge: 3, active: false },
    { label: 'Settings', icon: 'bi-gear', active: false },
  ];

  ngOnInit(): void {
    this.setCollapseByWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    this.setCollapseByWidth(width);
  }

  setCollapseByWidth(width: number) {
    this.isCollapsed = width < this.collapseBreakpoint;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(item: any) {
    if (item.children) {
      item.expanded = !item.expanded;
    }

    this.navItems.forEach(nav => {
      nav.active = false;
      if (nav.children) {
        nav.children.forEach(sub => (sub.active = false));
      }
    });

    item.active = true;
  }
}
