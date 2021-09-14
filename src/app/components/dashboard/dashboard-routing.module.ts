import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionGlobalComponent } from './configuracion-global/configuracion-global.component';
import { DashboardComponent } from './dashboard.component';
import { EquiposComponent } from './equipos/equipos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'', component: InicioComponent},
    {path:'equipos', component: EquiposComponent},
    {path:'configuracion_global', component: ConfiguracionGlobalComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
