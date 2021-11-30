import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Cita } from '../../Models/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Persona } from '../../Models/Persona';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CuadroModalComponent } from '../../modal/cuadro-modal/cuadro-modal.component';
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

  openDialog(texto:String):void {
    this.dialog.open(CuadroModalComponent,{data:texto});
  }

  constructor(private citaService:CitaService,private clienteService:ClienteService,private dialog: MatDialog) { }

  get idPersona() { return this.formRegistroAgenda.get('identificacion'); }

  get fecha() { return this.formRegistroAgenda.get('fechaCita'); }

  formRegistroAgenda = new FormGroup({
    identificacion: new FormControl('',Validators.required),
    fechaCita: new FormControl('',Validators.required),
  });

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
    this.openDialog('lista cargada');
  }
  registrarCita(){
    if(this.idPersona.invalid && this.fecha.invalid){

    }else{
      this.citaService.post(this.cita).subscribe(result => {
        if(result!=null){
          this.openDialog('se agendo la cita con id :'+result.idCita);
        }else{
          this.openDialog('no se pudo agendar la cita');
        }
    });
    }

  }
}
