import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Jorge',
    poder: 100
  }

  /*
  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }
  
  agregarNuevoPersonaje( argumento: Personaje ) {
    // debugger; ESTO NOS PUEDE SACAR DE APUROS PRIMERA DEPURACION
    this.personajes.push( argumento );
  }


  // ESTO SE CONOCE COMO ESTAMOS 
  // INJECTANDO UNA DEPENDENCIA
  constructor( private dbzService: DbzService ) {
    // ESTO FUNCIONA A LA MANERA BRUTA
    //this.personajes = this.dbzService.personajes; 
  }
  */

  


  /*
  cambiarNombre( event: any){
    console.log( event.target.value);
  }
  */

  //agregar( event: any ) {
    //event.preventDefault();
  
    /*
  agregar() {
    if( this.nuevo.nombre.trim().length === 0 ) { return; }
    console.log( this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 }

  }
   */
}
