import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-navbar-mobile-menu',
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrls: ['./navbar-mobile-menu.component.scss'],
})
export class NavbarMobileMenuComponent implements OnInit {
  @Input() pagesMenu: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
