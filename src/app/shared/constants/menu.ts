import { MenuItem } from "../models/menu.model";

export class Menu {

	public static pages: MenuItem[] = [
		{
			group: 'Base',
			separator: false,
			items: [
				{ icon: 'assets/icons/chart-pie.svg', label: 'Dashboard', route: '/dashboard', expanded: false, },
				{
					icon: 'assets/icons/bookmark.svg', label: 'Books', route: '/books', expanded: false,
					children: [
						{ label: 'Current Files', route: '/books/current-files' },
						{ label: 'Downloads', route: '/books/download' },
						{ label: 'Trash', route: '/books/trash' },
					]
				},
			]
		},
		{
			group: 'Colaboration',
			separator: true,
			items: [
				{ icon: 'assets/icons/download.svg', label: 'Download', route: '/download', expanded: false, },
				{ icon: 'assets/icons/gift.svg', label: 'Gift Card', route: '/gift', expanded: false, },
				{ icon: 'assets/icons/users.svg', label: 'Users', route: '/users', expanded: false, },
			]
		},
		{
			group: '',
			separator: false,
			items: [
				{ icon: 'assets/icons/cog.svg', label: 'Settings', route: '/settings', expanded: false, },
				{ icon: 'assets/icons/bell.svg', label: 'Notifications', route: '/gift', expanded: false, },
				{
					icon: 'assets/icons/folder.svg', label: 'Folders', route: '/folders', expanded: false,
					children: [
						{ label: 'Current Files', route: '/folders/current-files' },
						{ label: 'Downloads', route: '/folders/download' },
						{ label: 'Trash', route: '/folders/trash' },
					]
				},
			]
		}
	]
}