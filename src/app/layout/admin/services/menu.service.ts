import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Menu } from 'src/app/shared/constants/menu';
import { MenuItem, SubMenuItem } from 'src/app/shared/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _isOpen$ = new BehaviorSubject<boolean>(true);
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);

  constructor(
    private router: Router
  ) {

    this._pagesMenu$.next(Menu.pages);

    // /** Expand menu base on active route */
    // this._pagesMenu$.forEach((menuItem) => {
    //   menuItem.forEach((menu) => {
    //     menu.items.forEach((item) => {
    //       item.expanded = this.isActive(item.route);
    //       if (item.children) {
    //         this.expand(item.children);
    //       }
    //     })
    //   })
    // })

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this._pagesMenu$.forEach((menuItem) => {
          menuItem.forEach((menu) => {
            menu.items.forEach((item) => {
              const active = this.isActive(item.route);
              item.expanded = active;
              item.active = active;
              if (item.children) {
                this.expand(item.children);
              }
            })
          })
        })
      }
    })

  }

  public toggleSidebar() {
    this._isOpen$.next(!this._isOpen$.value);
  }

  public toggleMenu(menu: any) {
    let expanded = menu.expanded;
    this.isOpen = true;
    this._pagesMenu$.forEach((menuItem) => {
      menuItem.forEach((menu) => {
        menu.items.forEach((item) => {
          item.expanded = false;
          item.active = this.isActive(item.route);
          if (item.children) {
            this.collapse(item.children);
          }
        })
      })
    });
    menu.expanded = !expanded;
  }

  public toggleSubMenu(submenu: SubMenuItem) {
    const expanded = !submenu.expanded;
    // this.submenu.children?.forEach((menu: any) => {
    //   menu.expanded = false;
    //   if (menu.children) {
    //     this.collapse(menu.children);
    //   }
    // });
    submenu.expanded = expanded;
  }

  get isOpen$() { return this._isOpen$.asObservable(); }
  set isOpen(value: boolean) { this._isOpen$.next(value); }
  get pagesMenu$() { return this._pagesMenu$.asObservable(); }


  private isActive(instruction: any): boolean {
    console.log('-- isActive --')
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    })
  }

  private expand(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.collapse(item.children);
    })
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    })
  }

}
