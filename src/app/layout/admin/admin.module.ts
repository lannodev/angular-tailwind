import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/sidebar/menu-item/menu-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    AdminComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class AdminModule { }
