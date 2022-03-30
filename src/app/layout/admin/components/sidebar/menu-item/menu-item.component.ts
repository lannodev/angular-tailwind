import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() public isOpen = true;
  @Input() public menuItem: MenuItem[] = [];


  constructor(
    private router: Router
  ) {
    /** await menu values */
    setTimeout(() => {
      this.menuItem.forEach(menu => {
        menu.items.forEach(item => item.expanded = this.isActive([item.route]))
      });
    }, 0);
  }

  ngOnInit(): void {
  }

  public expandedMenu(menu: any) {
    let expanded = menu.expanded;
    this.menuItem.forEach(menu => menu.items.forEach(item => item.expanded = false));
    menu.expanded = !expanded;
  }

  /** Check active route */
  private isActive(instruction: any[]): boolean {
    return this.router.isActive(
      this.router.createUrlTree(instruction),
      { paths: 'subset', queryParams: 'subset', fragment: 'ignored', matrixParams: 'ignored' }
    );
  }

}
