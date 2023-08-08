import { Component, Input, OnInit } from '@angular/core';

/*app-cabecero
  Componente cabecero, parte superior de la página que contiene
  el presupuesto disponible, el total de ingresos, egresos y el
  porcentaje de egresos con respecto a los ingresos
*/
@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})


export class CabeceroComponent implements OnInit {

  /*Variables que vienen desde componente padre
  app.component que inyectamos
  gracias al "@Input()"*/
  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcentajeTotal:number;

  constructor() { }

  ngOnInit(): void {
  }

}
