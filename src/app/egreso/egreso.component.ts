import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicio } from './egreso.service';
import { Egreso } from './egreso.model';
import { ToastrService } from 'ngx-toastr';

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
  en el servicio. Además de una dependencia de la librería
  ngx-toastr para mostrar notificaciones.*/
  constructor(private egresoServicio: EgresoServicio,
              private toastr: ToastrService) { }

  //Inicializa el arreglo (vacío) de egresos con los
  //egresos del arreglo del egresoServicio.
  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  //Elimina del arreglo el egreso que recibe como
  //parámetro en el html y lo notifica.
  eliminarEgreso(egreso: Egreso): void{
    this.egresoServicio.eliminarEgreso(egreso);
    this.notificarEliminacion(egreso);
  }

  //Calcula el porcentaje individual de cada egreso
  //tomando en cuenta el porcentaje total de los egresos
  //con respecto a los ingresos.
  calcularPorcentajeDeEgreso(egreso: Egreso): number{
    return egreso.valor*this.porcentajeTotal/this.egresoTotal;
  }

  //Función para mostrar la notificación de que se eliminó un egreso
  //con el uso de la librería ngx-toastr
  notificarEliminacion(egreso: Egreso) {
    this.toastr.info(egreso.descripcion + " con valor de $" + egreso.valor, "Eliminacion de egreso");
  }

}
