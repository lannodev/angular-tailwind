import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {TuiRootModule} from '@taiga-ui/core';
import {TranslateModule} from '@ngx-translate/core'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TranslateModule.forRoot(), SharedModule, TuiRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
