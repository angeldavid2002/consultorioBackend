import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Cita } from '../../Models/Cita';
import { CitaService } from 'src/app/services/cita.service';
@Component({
  selector: 'app-registrar-agenda',
  templateUrl: './registrar-agenda.component.html',
  styleUrls: ['./registrar-agenda.component.css']
})
export class RegistrarAgendaComponent implements OnInit {
  identificacion:string;
  fecha: Date= new Date;
  fechaString:string="";
  cita:Cita;
  constructor(private citaService:CitaService) { }

  ngOnInit(): void {
    this.cita=new Cita();
  }

  registrarCita(){
    this.extraerFecha();
    this.citaService.post(this.cita).subscribe(result => {
        if(result!=null){
          alert('cita agendada :'+JSON.stringify(result));
        }else{
          alert('no se pudo agendar la cita'+JSON.stringify(this.cita));
        }
    });
  }

  extraerFecha(){
    if((document.getElementById("fecha-seleccion")as HTMLInputElement).value.toString()!="Invalid Date"){
      this.cita.fechaCita= new Date((document.getElementById("fecha-seleccion")as HTMLInputElement).value);
    }
  }
}
