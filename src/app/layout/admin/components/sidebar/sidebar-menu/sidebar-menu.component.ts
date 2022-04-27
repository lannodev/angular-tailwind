import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router'
import { MenuItem } from 'src/app/shared/models/menu.model'

@Component({
	selector: 'app-sidebar-menu',
	templateUrl: './sidebar-menu.component.html',
	styleUrls: ['./sidebar-menu.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuComponent implements OnInit, OnChanges {
	@Input() public isOpen = true
	@Input() public menuItem: MenuItem[] = []

	constructor(private router: Router) {
		/** await menu values */
		setTimeout(() => {
			this.menuItem.forEach((menu) => {
				menu.items.forEach((item) => {
					const active = this.isActive(item.route);
					item.expanded = active;
					if (item.children) {
						this.expand(item.children);
					}
				})
			})
		}, 0)
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}

	ngOnInit(): void { }

	public toggleMenu(menu: any) {
		let expanded = menu.expanded;
		this.menuItem.forEach((menu) => {
			menu.items.forEach((item) => {
				item.expanded = false;
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
