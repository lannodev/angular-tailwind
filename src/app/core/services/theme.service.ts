import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public default = 'light';
  public themeChanged = signal(this.theme);

  constructor() {
    this.addThemeClass();
  }

  public get theme(): string {
    return localStorage.getItem('theme') ?? this.default;
  }

  public set theme(value: string) {
    localStorage.setItem('theme', value);
    this.themeChanged.set(value);
    this.addThemeClass();
  }

  public get isDark(): boolean {
    return this.theme == 'dark';
  }

  private addThemeClass() {
    document.querySelector('html')!.className = this.theme;
  }
}
