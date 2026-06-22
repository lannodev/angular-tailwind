import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [AuthRoutingModule, AngularSvgIconModule.forRoot()],
  providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())],
})
export class AuthModule {}
