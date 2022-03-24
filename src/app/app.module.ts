import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/admin/sidebar/sidebar.component';
import { NavbarComponent } from './layout/admin/navbar/navbar.component';
import { FooterComponent } from './layout/admin/footer/footer.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ResponsiveHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
