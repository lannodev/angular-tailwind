export interface MenuItem {
	group: string
	separator?: boolean
	selected?: boolean
	active?: boolean
	items: Array<{
		icon: string
		label: string
		route: string | null
		expanded?: boolean,
		active?: boolean
		children?: Array<{
			label: string
			route: string
		}>
	}>
}
