import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './pages/botones/botones.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { MenusComponent } from './pages/menus/menus.component';
import { TransicionesComponent } from './pages/transiciones/transiciones.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'botones', component: BotonesComponent},
      {path: 'transiciones', component: TransicionesComponent},
      {path: 'menus', component: MenusComponent},
      {path: 'inputs', component: InputsComponent},
      {path: '**', redirectTo: 'botones'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ExperimentosRoutingModule { }
