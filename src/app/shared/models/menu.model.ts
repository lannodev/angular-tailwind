export interface MenuItem {
	group: string;
	separator?: boolean;
	items: Array<{
		icon: string;
		label: string;
		route: string | null;
		expanded?: boolean;
		children?: Array<{
			label: string;
			route: string;
		}>
	}>;
}