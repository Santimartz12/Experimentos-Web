import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentosRoutingModule } from './experimentos-routing.module';
import { BotonesComponent } from './pages/botones/botones.component';
import { TransicionesComponent } from './pages/transiciones/transiciones.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    BotonesComponent,
    TransicionesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ExperimentosRoutingModule,
  ]
})
export class ExperimentosModule { }
