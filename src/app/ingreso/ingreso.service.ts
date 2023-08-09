import { Ingreso } from "./ingreso.model";

/*
Clase de servicio del componente Ingreso con un arreglo
de ingresos, cuenta con dos elementos que vendrán "por
default" y las funciones principales sobre el arreglo.
*/
export class IngresoServicio{
  ingresos: Ingreso[]=[
    new Ingreso("Salario", 4000),
    new Ingreso("Venta de control", 500)
  ];

  //Elimina del arreglo el ingreso que recibe como parámetro.
  eliminarIngreso(ingreso: Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1)
  }

  agregarIngreso(descripcion: string, valor: number){
    this.ingresos.push(new Ingreso(descripcion, valor));
  }

}
