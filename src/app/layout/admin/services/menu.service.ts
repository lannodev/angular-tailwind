import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Menu } from 'src/app/shared/constants/menu';
import { MenuItem, SubMenuItem } from 'src/app/shared/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnDestroy {

  private _isOpen$ = new BehaviorSubject<boolean>(true);
  public _pagesMenu$ = new BehaviorSubject<MenuItem[]>([]);
  private subscription = new Subscription();

  constructor(
    private router: Router
  ) {

    this._pagesMenu$.next(Menu.pages);

    let sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        /** Expand menu base on active route */
        this._pagesMenu$.forEach((menuItem) => {
          menuItem.forEach((menu) => {
            menu.items.forEach((item) => {
              const active = this.isActive(item.route);
              item.expanded = active;
              item.active = active;
              menu.active = active;
              if (item.children) {
                this.expand(item.children);
              }
            })
          })
        })
      }
    })
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public toggleSidebar() {
    this._isOpen$.next(!this._isOpen$.value);
  }

  public toggleMenu(menu: any) {
    this.isOpen = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  get isOpen$() { return this._isOpen$.asObservable(); }
  set isOpen(value: boolean) { this._isOpen$.next(value); }
  get pagesMenu$() { return this._pagesMenu$.asObservable(); }


  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored'
    })
  }

  private expand(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    })
  }

}
