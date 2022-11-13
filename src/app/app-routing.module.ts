import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const rutas : Routes = [
  {
    path: 'experimentos',
    loadChildren: () => import('./experimentos/experimentos.module').then(m => m.ExperimentosModule),
  },
  {
    path: '**',
    redirectTo: 'experimentos',
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
