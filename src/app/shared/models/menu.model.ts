export interface MenuItem {
	group: string;
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