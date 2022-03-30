import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu.model';
import { Menu } from 'src/app/shared/constants/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isOpen = true;
  public pagesMenu: MenuItem[];

  constructor() {
    this.pagesMenu = Menu.pages;
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}

