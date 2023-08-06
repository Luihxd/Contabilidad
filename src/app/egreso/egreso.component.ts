import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicio } from './egreso.service';
import { Egreso } from './egreso.model';

/*app-egreso
  Componente egreso
  Muestra la lista de egresos, y da la opción de borrarlos
*/
@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  //Arreglo de ingresos.
  egresos: Egreso[] = [];

  /*Variables que vienen desde componente padre
  app.component que inyectamos
  gracias al "@Input()".*/
  @Input() porcentajeTotal:number;
  @Input() egresoTotal:number;

  /*Se inyecta una dependencia del servicio de egreso para
  inicializar el arreglo de egresos que tenemos creado en
  en el servicio.*/
  constructor(private egresoServicio: EgresoServicio) { }

  //Inicializa el arreglo (vacío) de egresos con los
  //egresos del arreglo del egresoServicio.
  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  //Elimina del arreglo el egreso que recibe como
  //parámetro en el html.
  eliminarEgreso(egreso: Egreso): void{
    this.egresoServicio.eliminarEgreso(egreso);
  }

  //Calcula el porcentaje individual de cada egreso
  //tomando en cuenta el porcentaje total de los egresos
  //con respecto a los ingresos.
  calcularPorcentajeDeEgreso(egreso: Egreso): number{
    return egreso.valor*this.porcentajeTotal/this.egresoTotal;
  }

}
