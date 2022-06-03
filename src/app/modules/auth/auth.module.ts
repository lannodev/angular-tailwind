import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
    ]
})
export class AuthModule { }
