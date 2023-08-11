import { Component, Input, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { ToastrService } from 'ngx-toastr';


/*app-formulario
  Componente formulario
  Permite agregar ingresos o egresos con un formulario.
*/
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //Variable que define si la operación es un ingreso o egreso,
  //por defecto, la operación es de ingreso.
  tipo:string="ingresoOperacion";

  //Variables que corresponden a los campos de ingreso o egreso.
  descripcionInput:string;
  valorInput:number;

  /*Variable que viene desde componente padre
  app.component que inyectamos
  gracias al "@Input()"*/
  @Input() presupuestoTotal:number;

  //Se inyecta una dependencia de los servicios de ingreso, egreso y toastr de la
  //librería ngx-toastr para mostrar notificaciones
  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //Asigna el valor del tipo de operacion cuando se cambia el valor del select del html.
  tipoDeOperacion(evento):void{
    this.tipo = evento.target.value;
  }

  //Dependiendo del tipo de operación, se hace la inserción al arreglo de ingresos o
  //egresos según corresponda.
  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.agregarIngreso(this.descripcionInput, this.valorInput);
      this.notificarInsersion("Ingreso");
    }else if (this.tipo === "egresoOperacion"){
      //Si es egreso, debemos asegurar que contamos con dinero suficiente, esto con
      //ayuda de la variable presupuestoTotal
      if(this.valorInput > this.presupuestoTotal){
        //Si el valor del egreso excede el presupuesto, se notifica al usuario y
        //no se hace la inserción
        this.notificarError();

      }else{
        //Si no lo excede, se hace la inserción y se notifica
        this.egresoServicio.agregarEgreso(this.descripcionInput, this.valorInput);
        this.notificarInsersion("Egreso");
      }

    }

  }

  //Función para mostrar la notificación de que se hizo una inserción correctamente
  //con el uso de la librería ngx-toastr
  notificarInsersion(tipo: string) {
    this.toastr.success(this.descripcionInput + ' de $' + this.valorInput, tipo + " realizado con exito");
  }

  //Función para mostrar la notificación de que no se pudo insertar un egreso
  //con el uso de la librería ngx-toastr
  notificarError() {
    this.toastr.error("El valor del egreso (" + this.valorInput + "), es mayor que el presupuesto (" + this.presupuestoTotal + ")", "El egreso no se pudo realizar");
  }

}
