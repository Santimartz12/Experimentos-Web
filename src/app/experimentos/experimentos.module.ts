import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentosRoutingModule } from './experimentos-routing.module';
import { BotonesComponent } from './pages/botones/botones.component';
import { TransicionesComponent } from './pages/transiciones/transiciones.component';
import { MenusComponent } from './pages/menus/menus.component';
import { InputsComponent } from './pages/inputs/inputs.component';


@NgModule({
  declarations: [
    BotonesComponent,
    TransicionesComponent,
    MenusComponent,
    InputsComponent,
  ],
  imports: [
    CommonModule,
    ExperimentosRoutingModule,
  ]
})
export class ExperimentosModule { }
