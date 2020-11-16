import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
        import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
