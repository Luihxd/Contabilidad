import { Egreso } from "./egreso.model";

export class EgresoServicio{
  egresos: Egreso[]=[
    new Egreso("Pago de inscripcion", 1080),
    new Egreso("Compra de café", 125)
  ];

}
