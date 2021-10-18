import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-registrar-agenda',
  templateUrl: './registrar-agenda.component.html',
  styleUrls: ['./registrar-agenda.component.css']
})
export class RegistrarAgendaComponent implements OnInit {

  fecha: Date= new Date;
  fechaString:string="";
  constructor() { }

  ngOnInit(): void {
  }

  extraerFecha(){
    if((document.getElementById("fecha-seleccion")as HTMLInputElement).value.toString()!="Invalid Date"){
      this.fecha= new Date((document.getElementById("fecha-seleccion")as HTMLInputElement).value.toString());
      this.fechaString= this.fecha.toString();
    }
    return this.fechaString;
  }
}
