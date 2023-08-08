import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";

  descripcionInput:string;
  valorInput:number;



  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoDeOperacion(evento):void{
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.agregarIngreso(this.descripcionInput, this.valorInput);
    }else if (this.tipo === "egresoOperacion"){
      this.egresoServicio.agregarEgreso(this.descripcionInput, this.valorInput);
    }
  }

}
