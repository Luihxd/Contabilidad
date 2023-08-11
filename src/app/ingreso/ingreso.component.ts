import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';
import { ToastrService } from 'ngx-toastr';

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
  en el servicio. Además de una dependencia de la librería
  ngx-toastr para mostrar notificaciones.*/
  constructor(private ingresoServicio:IngresoServicio,
              private toastr: ToastrService) {

  }

  //Inicializa el arreglo (vacío) de ingresos con los
  //ingresos del arreglo del ingresoServicio.
  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  //Elimina del arreglo el ingreso que recibe como
  //parámetro en el html y lo notifica.
  eliminarIngreso(ingreso: Ingreso): void{
    this.ingresoServicio.eliminarIngreso(ingreso);
    this.notificarEliminacion(ingreso);
  }

  //Función para mostrar la notificación de que se eliminó un ingreso
  //con el uso de la librería ngx-toastr
  notificarEliminacion(ingreso: Ingreso) {
    this.toastr.info(ingreso.descripcion + " con valor de $" + ingreso.valor, "Eliminacion de ingreso");
  }


}
