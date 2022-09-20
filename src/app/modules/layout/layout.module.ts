import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarMenuComponent } from './components/navbar/navbar-menu/navbar-menu.component';
import { NavbarMobileMenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarMobileSubmenuComponent } from './components/navbar/navbar-mobile/navbar-mobile-submenu/navbar-mobile-submenu.component';
import { NavbarMobileComponent } from './components/navbar/navbar-mobile/navbar-mobilecomponent';
import { NavbarSubmenuComponent } from './components/navbar/navbar-submenu/navbar-submenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileMenuComponent } from './components/navbar/profile-menu/profile-menu.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './components/sidebar/sidebar-submenu/sidebar-submenu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    SidebarMenuComponent,
    ProfileMenuComponent,
    SidebarSubmenuComponent,
    NavbarSubmenuComponent,
    BottomNavbarComponent,
    NavbarMenuComponent,
    NavbarMobileComponent,
    NavbarMobileMenuComponent,
    NavbarMobileSubmenuComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot(), SharedModule],
})
export class LayoutModule {}
