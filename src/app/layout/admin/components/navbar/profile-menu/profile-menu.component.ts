import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  public isMenuOpen = false;

  @ViewChild('profileButton') profileButton: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('profileMenu') profileMenu: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.profileButton.nativeElement && e.target !== this.profileMenu.nativeElement) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
