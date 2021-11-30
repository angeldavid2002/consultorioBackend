import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ClienteService } from 'src/app/services/cliente.service';
import { CuadroModalComponent } from '../../modal/cuadro-modal/cuadro-modal.component';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private clienteService:ClienteService,private dialog: MatDialog) { }

  openDialog(texto:String):void {
    this.dialog.open(CuadroModalComponent,{data:texto});
  }

  get identificacion() { return this.formRegistroCliente.get('identificacion'); }
  get nombre() { return this.formRegistroCliente.get('nombre'); }
  get apellido() { return this.formRegistroCliente.get('apellido'); }
  get direccion() { return this.formRegistroCliente.get('direccion'); }
  get fecha() { return this.formRegistroCliente.get('fecha'); }
  get correo() { return this.formRegistroCliente.get('correo'); }
  get telefono() { return this.formRegistroCliente.get('telefono'); }
  get estado() {return this.formRegistroCliente.get('estado')}

  formRegistroCliente = new FormGroup({
    identificacion: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    direccion: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    correo: new FormControl('',[Validators.required,Validators.email]),
    telefono: new FormControl('',Validators.required),
    estado: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    this.persona = new Persona();
  }

  GuardarPersona() {
    this.clienteService.post(this.persona).subscribe(result => {
        if(result!=null){
          this.openDialog('se creo la persona con identificacion :'+result.identificacion);
        }else{
          this.openDialog('no se pudo registrar la persona con identificacion: '+this.persona.identificacion);
        }
    });
  }
  cerrar(){
    this.openDialog('se limpio')
  }

}
