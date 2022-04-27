import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent implements OnInit {

  @Input() public submenu = <SubMenuItem>{};
  @Input() public isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(menu: any) {
    const expanded = !menu.expanded;
    this.submenu.children?.forEach((menu: any) => {
      menu.expanded = false;
      if (menu.children) {
        this.collapse(menu.children);
      }
    });
    menu.expanded = expanded;
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    })
  }

}
