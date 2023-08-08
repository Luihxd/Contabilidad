import { Egreso } from "./egreso.model";

/*
Clase de servicio del componente Egreso con un arreglo
de egresos, cuenta con dos elementos que vendrán "por
default" y las funciones principales sobre el arreglo.
*/
export class EgresoServicio{
  egresos: Egreso[]=[
    new Egreso("Pago de inscripcion", 1080),
    new Egreso("Compra de café", 125),
    new Egreso("Compra de cold brew", 150)
  ];

  //Elimina del arreglo el egreso que recibe como parámetro.
  eliminarEgreso(egreso: Egreso): void{
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }

}
