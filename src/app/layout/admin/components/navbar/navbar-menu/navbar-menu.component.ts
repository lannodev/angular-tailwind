import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu.model';

@Component({
	selector: 'app-navbar-menu',
	templateUrl: './navbar-menu.component.html',
	styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
	@Input() pagesMenu: MenuItem[] = [];

	constructor() {}

	ngOnInit(): void {}

	public toggleMenu(menu: MenuItem): void {
		menu.selected = !menu.selected;
	}
}
