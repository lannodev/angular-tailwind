import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [
        SidebarComponent,
        NavbarComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
