import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignInRedirectCallbackComponent } from './signin-redirect-callback.component';
import { SignOutRedirectCallbackComponent } from './signout-redirect-callback.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'signin-callback',
        component: SignInRedirectCallbackComponent
    },
    {
        path: 'signout-callback',
        component: SignOutRedirectCallbackComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }