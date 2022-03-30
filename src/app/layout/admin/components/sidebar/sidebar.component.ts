import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu.model';
import { Menu } from 'src/app/shared/constants/menu';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isOpen = true;
  public pagesMenu: MenuItem[];

  constructor(
    private themeService: ThemeService
  ) {
    this.pagesMenu = Menu.pages;
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }

}

