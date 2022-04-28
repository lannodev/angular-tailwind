import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem, SubMenuItem } from 'src/app/shared/models/menu.model';
import { MenuService } from '../../../services/menu.service';

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuComponent implements OnInit {

	public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
	public isOpen$: Observable<boolean> = new Observable<boolean>();

	constructor(
		private menuService: MenuService
	) {
		this.isOpen$ = this.menuService.isOpen$;
		this.pagesMenu$ = this.menuService.pagesMenu$
	}

	public toggleMenu(subMenu: SubMenuItem) {
		this.menuService.toggleMenu(subMenu);
	}

	ngOnInit(): void { }

}
