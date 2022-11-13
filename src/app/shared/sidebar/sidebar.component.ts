import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  listadoPags = [
    {
      nombre: 'Botones',
      url: '/experimentos/botones'
    },
    {
      nombre: 'Transiciones',
      url: '/experimentos/transiciones'
    },
    {
      nombre: 'Menús',
      url: '/experimentos/menus'
    },
    {
      nombre: 'Inputs',
      url: '/experimentos/inputs'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }




}
