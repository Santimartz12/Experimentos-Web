import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ExperimentosModule } from '../experimentos/experimentos.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ExperimentosModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
