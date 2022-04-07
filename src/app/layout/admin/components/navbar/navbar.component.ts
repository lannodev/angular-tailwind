import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/constants/menu';
import { MenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public pagesMenu: MenuItem[];

  constructor() {
    this.pagesMenu = Menu.pages;
  }

  ngOnInit(): void {
  }

}
