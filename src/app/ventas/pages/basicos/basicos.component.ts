import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'judit';
  nombreUpper: string = 'JUDIT';
  nombreCompleto: string = 'jUdiT sAnToS';

  fecha: Date = new Date(); //Dia actual

}
