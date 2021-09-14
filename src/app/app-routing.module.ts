import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  // carga perezosa
  {path: 'dashboard', loadChildren:()=>import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule)},
  // para pagina no encontrada, cuando no existe
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
