import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './pages/botones/botones.component';
import { HomeComponent } from './pages/home/home.component';
import { TransicionesComponent } from './pages/transiciones/transiciones.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'botones', component: BotonesComponent},
      {path: 'transiciones', component: TransicionesComponent},
      {path: '**', redirectTo: 'botones'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ExperimentosRoutingModule { }
