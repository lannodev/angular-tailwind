import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu.model'
import { MenuService } from '../../../services/menu.service';

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuComponent implements OnInit, OnChanges {

	@Input() public menuItem: MenuItem[] = [];
	public isOpen$: Observable<boolean> = new Observable<boolean>();

	constructor(
		private router: Router,
		private menuService: MenuService
	) {

		this.isOpen$ = this.menuService.isOpen$;

		/** await menu values */
		setTimeout(() => {
			this.menuItem.forEach((menu) => {
				menu.items.forEach((item) => {
					item.expanded = this.isActive(item.route);
					if (item.children) {
						this.expand(item.children);
					}
				})
			})
		}, 0)

	}

	ngOnChanges(changes: SimpleChanges): void {
		/** Set active menu */
		if (changes['isOpen']) {
			this.menuItem.forEach((sub) => {
				sub.items.forEach((item) => {
					item.active = this.isActive(item.route);
				})
			});
		}
	}

	ngOnInit(): void { }

	public toggleMenu(menu: any) {
		let expanded = menu.expanded;
		this.menuService.isOpen = true;
		this.menuItem.forEach((sub) => {
			sub.items.forEach((item) => {
				item.expanded = false;
				item.active = this.isActive(item.route);
				if (item.children) {
					this.collapse(item.children);
				}
			})
		});
		menu.expanded = !expanded;
	}

	private collapse(items: Array<any>) {
		items.forEach((item) => {
			item.expanded = false;
			if (item.children) this.collapse(item.children);
		})
	}

	private expand(items: Array<any>) {
		items.forEach((item) => {
			item.expanded = this.isActive(item.route);
			if (item.children) this.collapse(item.children);
		})
	}

	/** Check active route */
	public isActive(instruction: any): boolean {
		return this.router.isActive(this.router.createUrlTree([instruction]), {
			paths: 'subset',
			queryParams: 'subset',
			fragment: 'ignored',
			matrixParams: 'ignored',
		})
	}

}
