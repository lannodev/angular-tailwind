import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { MenuItem } from 'src/app/shared/models/menu.model'
import { Menu } from 'src/app/shared/constants/menu'
import { ThemeService } from 'src/app/shared/services/theme.service'
import packageJson from '../../../../../../package.json'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit, OnChanges {
	public isOpen = true
	public pagesMenu: MenuItem[]
	public appJson: any = packageJson

	constructor(public themeService: ThemeService) {
		this.pagesMenu = Menu.pages
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}

	ngOnInit(): void { }

	public toggleSidebar() {
		this.isOpen = !this.isOpen
	}

	toggleTheme() {
		this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light'
	}
}
