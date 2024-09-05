import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ContractsRoutingModule } from './contracts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPageComponent } from './pages/new-page/new-page.component';

@NgModule({
  declarations: [NewPageComponent], 
  imports: [
    ContractsRoutingModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class ContractsModule {}