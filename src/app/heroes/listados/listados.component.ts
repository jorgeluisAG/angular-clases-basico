import { Component } from '@angular/core';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html'
})
export class ListadosComponent{

  /*
  constructor() { }

  // se utiliza para hacer peticioes
  ngOnInit(): void {
  }
  */

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //console.log('borrando...');
    // LO ELIMINA EL PRIMER ELEMENTO => this.heroes.shift();
    //this.heroes.splice(0,1)
    //const heroeBorrado = this.heroes.shift();
    //console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
