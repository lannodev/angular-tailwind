import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            //   {
            //     path: 'login',
            //     component: LoginComponent,
            //     data: { returnUrl: window.location.pathname },
            //   },
            //   {
            //     path: 'forgot-password',
            //     component: ForgotPasswordComponent,
            //   },
            //   {
            //     path: 'reset-password',
            //     component: ResetPasswordComponent,
            //   },
            //   {
            //     path: 'otp-challenge',
            //     component: OtpChallengeComponent,
            //   },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
