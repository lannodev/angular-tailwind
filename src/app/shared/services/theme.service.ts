import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	public default = 'light'

	constructor() {}

	public get theme(): string {
		return localStorage.getItem('theme') ?? this.default
	}

	public set theme(value: string) {
		localStorage.setItem('theme', value)
	}

	public get isDark(): boolean {
		return this.theme == 'dark'
	}
}
