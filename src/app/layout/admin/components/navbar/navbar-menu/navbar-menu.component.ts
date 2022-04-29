import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu.model'
import { MenuService } from '../../../services/menu.service';

@Component({
	selector: 'app-navbar-menu',
	templateUrl: './navbar-menu.component.html',
	styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent implements OnInit {
	public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();

	constructor(
		private menuService: MenuService
	) {
		this.pagesMenu$ = this.menuService.pagesMenu$
	}

	ngOnInit(): void { }

	public toggleMenu(menu: MenuItem): void {
		menu.selected = !menu.selected
	}
}
