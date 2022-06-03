import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                component: SignInComponent,
                data: { returnUrl: window.location.pathname },
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
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
