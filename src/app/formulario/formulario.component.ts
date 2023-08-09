import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';


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

  //Se inyecta una dependencia de los servicios de ingreso y egreso.
  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio) { }

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
    }else if (this.tipo === "egresoOperacion"){
      this.egresoServicio.agregarEgreso(this.descripcionInput, this.valorInput);
    }
  }

}
