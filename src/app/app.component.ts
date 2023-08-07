import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';


/*app-component
  Componente padre, obtiene la lista de ingresos y egresos de sus
  servicios correspondientes, con ellas, puede sacar el total de
  cada uno, el presupuesto para realizar egresos/gastos, y el
  porcentaje de los egresos con respecto a los ingresos
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //Arreglos de ingresos y egresos
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  /*Se inyecta una dependencia de los servicios de ingreso y egreso
  para inicializar los arreglos ingresos y egresos con el arreglo que
  tenemos creado en los servicios*/
  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  //Devuelve la suma total del valor de todos los elementos
  //del arreglo de ingresos
  getIngresoTotal(){
    let ingresoTotal:number = 0;
    /*Funcion flecha que recorre cada elemento del arreglo
    ingresos usando una variable temporal "ingreso" para
    sumar su valor */
    this.ingresos.forEach(ingreso=>{
      ingresoTotal += ingreso.valor
    });
    return ingresoTotal;
  }


  //Devuelve la suma total del valor de todos los elementos
  //del arreglo de egresos
  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso=>{
      egresoTotal += egreso.valor
    });
    return egresoTotal;
  }

  //Devuelve el valor del porcentaje de los egresos con respecto
  //a los ingresos
  getPorcentajeTotal(){
    let porcentajeTotal:number = 0;
    porcentajeTotal =  this.getEgresoTotal()/this.getIngresoTotal();
    return porcentajeTotal;
  }

  /*Devuelve el valor de la cantidad de dinero disponible
  para hacer egresos/gastos, restando al total de ingresos
  el total de egresos*/
  getPresupuestoTotal(){
    let presupuestoTotal:number = 0;
    presupuestoTotal = this.getIngresoTotal()-this.getEgresoTotal();
    return presupuestoTotal;
  }

}
