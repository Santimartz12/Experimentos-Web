import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('btn__presentacion') btnPresentacion! : ElementRef;

  //TODO:                     Cambiar a true
  mostrarPresentacion : boolean = false;
  estiloPresentacion : string = "presentacion__page";

  entrar(){
    this.estiloPresentacion = "presentacion__page eliminar"
    setTimeout(()=>{
      this.mostrarPresentacion = false;
    },300)
  }
  
  moverse(){
    console.log("Deberia Moverse");
    const largo = window.screen.availWidth - 380;
    const alto = window.screen.availHeight - 200;
    this.btnPresentacion.nativeElement.
    style = ` position: absolute ; top: ${Math.random() * alto}px; left: ${Math.random() * largo}px`
  }

}


// get estiloPresentacion(){
//   if(this.mostrarPresentacion){
//     return 'presentacion__page eliminar'
//   }
//   return 'presentacion__page'
// }