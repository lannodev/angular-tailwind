import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubMenuItem } from 'src/app/shared/models/menu.model';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent implements OnInit {

  @Input() public submenu = <SubMenuItem>{};
  public isOpen$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private menuService: MenuService
  ) {
    this.isOpen$ = this.menuService.isOpen$;
  }

  ngOnInit(): void {
  }

  public toggleMenu(menu: any) {
    // const expanded = !menu.expanded;
    // this.submenu.children?.forEach((menu: any) => {
    //   menu.expanded = false;
    //   if (menu.children) {
    //     this.collapse(menu.children);
    //   }
    // });
    // menu.expanded = expanded;
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    })
  }

}
