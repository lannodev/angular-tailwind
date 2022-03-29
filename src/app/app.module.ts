import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { DashboardComponent } from './layout/admin/pages/dashboard/dashboard.component';
import { CurrentFilesComponent } from './layout/admin/pages/current-files/current-files.component';
import { DownloadComponent } from './layout/admin/pages/download/download.component';
import { TrashComponent } from './layout/admin/pages/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveHelperComponent,
    DashboardComponent,
    CurrentFilesComponent,
    DownloadComponent,
    TrashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
