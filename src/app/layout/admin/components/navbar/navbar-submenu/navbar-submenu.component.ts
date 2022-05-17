import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'div[navbar-submenu]',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.scss']
})
export class NavbarSubmenuComponent implements OnInit {

  @Input() public submenu = <SubMenuItem>{};

  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor() { }

  ngOnInit(): void {
  }

  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach(c => element.classList.remove(c));
      this.showMenuClass.forEach(c => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach(c => element.classList.remove(c));
      this.hideMenuClass.forEach(c => element.classList.add(c));
    }
  }

}
