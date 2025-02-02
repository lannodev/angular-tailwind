import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgFor,
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenuComponent,
  ],
})
export class SidebarMenuComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
