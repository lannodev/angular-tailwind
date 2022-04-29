import { MenuItem } from '../models/menu.model'

export class Menu {
	public static pages: MenuItem[] = [
		{
			group: 'Base',
			separator: false,
			items: [
				{
					icon: 'assets/icons/outline/chart-pie.svg',
					label: 'Dashboard',
					route: '/dashboard',
				},
				{
					icon: 'assets/icons/outline/bookmark.svg',
					label: 'Books',
					route: '/books',
					children: [
						{
							label: 'Anime', route: '/books/anime', children: [
								{ label: 'Dragronball', route: '/books/anime/dragonball' },
								{
									label: 'Naruto', route: '/books/anime/naruto', children: [
										{ label: 'Naruto 1', route: '/books/anime/naruto/1' },
										{ label: 'Naruto 2', route: '/books/anime/naruto/2' },
										{ label: 'Naruto 3', route: '/books/anime/naruto/3' },
									]
								},

							],
						},
						{ label: 'Downloads', route: '/books/download' },
						{ label: 'Trash', route: '/books/trash' },
					],
				},
			],
		},
		{
			group: 'Colaboration',
			separator: true,
			items: [
				{
					icon: 'assets/icons/outline/download.svg',
					label: 'Download',
					route: '/download',
				},
				{
					icon: 'assets/icons/outline/gift.svg',
					label: 'Gift Card',
					route: '/gift',
				},
				{
					icon: 'assets/icons/outline/users.svg',
					label: 'Users',
					route: '/users',
				},
			],
		},
		{
			group: 'Config',
			separator: false,
			items: [
				{
					icon: 'assets/icons/outline/cog.svg',
					label: 'Settings',
					route: '/settings',
				},
				{
					icon: 'assets/icons/outline/bell.svg',
					label: 'Notifications',
					route: '/gift',
				},
				{
					icon: 'assets/icons/outline/folder.svg',
					label: 'Folders',
					route: '/folders',
					children: [
						{ label: 'Current Files', route: '/folders/current-files' },
						{ label: 'Downloads', route: '/folders/download' },
						{ label: 'Trash', route: '/folders/trash' },
					],
				},
			],
		},
	]
}
