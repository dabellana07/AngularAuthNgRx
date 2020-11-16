import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { SignedInGuard } from 'src/app/core/guard/signed-in.guard';
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
        canActivate: [SignedInGuard],
        component: LoginComponent
    },
    {
        path: 'register',
        canActivate: [SignedInGuard],
        component: RegisterComponent
    },
    {
        path: 'signin-callback',
        canActivate: [SignedInGuard],
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