import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isOpen = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  isActive(instruction: any[]): boolean {
    return this.router.isActive(
      this.router.createUrlTree(instruction),
      { paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored' }
    );
  }
}

export interface MenuItem {
  icon: string;
  text: string;
  value: string;
  subMenu: Array<{
    text: string;
    value: string;
  }>
}