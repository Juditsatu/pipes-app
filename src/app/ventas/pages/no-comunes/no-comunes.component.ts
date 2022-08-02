import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Judit';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Clara'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'

  }

  cambiarCliente() {
    this.nombre = 'Fernando';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }


  //keyValue Pipe
  persona = {
    nombre: 'Judit',
    edat: 30,
    direccion: 'Barcelona'
  }

  //JsonPie
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Wonderwoman',
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise ( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  })

}
