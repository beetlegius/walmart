import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'products',
        loadChildren: './products/product.module#ProductModule'
      },
      { path: '', redirectTo: '/welcome', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
