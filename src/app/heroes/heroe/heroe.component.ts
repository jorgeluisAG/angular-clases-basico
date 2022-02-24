import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    // ESTO ES UN METODO
    obtenerNombre(): string {
        // ESTOS SON LOS BAC TICS ES DECIR COMO CONCATENAR UN STRINGS O SUMAR STRINGS
        return ` ${this.nombre} - ${this.edad} `

    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 30;
    }
}

