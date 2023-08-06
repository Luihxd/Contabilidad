import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

/*app-ingreso
  Componente ingreso
  Muestra la lista de ingresos, y da la opción de borrarlos.
*/
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  //Arreglo de ingresos.
  ingresos:Ingreso[] = [];

  /*Se inyecta una dependencia del servicio de ingreso para
  inicializar el arreglo de ingresos que tenemos creado en
  en el servicio.*/
  constructor(private ingresoServicio:IngresoServicio) {

  }

  //Inicializa el arreglo (vacío) de ingresos con los
  //ingresos del arreglo del ingresoServicio.
  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  //Elimina del arreglo el ingreso que recibe como
  //parámetro en el html.
  eliminarIngreso(ingreso: Ingreso): void{
    this.ingresoServicio.eliminar(ingreso);
  }

}
