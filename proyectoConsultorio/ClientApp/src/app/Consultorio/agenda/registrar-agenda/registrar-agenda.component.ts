import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Cita } from '../../Models/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Persona } from '../../Models/Persona';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-registrar-agenda',
  templateUrl: './registrar-agenda.component.html',
  styleUrls: ['./registrar-agenda.component.css']
})
export class RegistrarAgendaComponent implements OnInit {
  identificacion:string;
  cita:Cita;
  buscar:boolean;
  personas:Persona[];
  persona:Persona;

  constructor(private citaService:CitaService,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cita=new Cita();
    this.buscar=false;
  }
  llenarDatos(identificacion:string){
    this.cita.idPersona=identificacion;
  }
  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  registrarCita(){
    this.citaService.post(this.cita).subscribe(result => {
        if(result!=null){
          alert('cita agendada :'+JSON.stringify(result));
        }else{
          alert('no se pudo agendar la cita'+JSON.stringify(this.cita));
        }
    });
  }
}
