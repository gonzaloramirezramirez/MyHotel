import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo:'/home', pathMatch:'full'},
];*/

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
