import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private clienteService:ClienteService) { }

  get idPersona() { return this.formRegistroAgenda.get('identificacion'); }
  get nombre() { return this.formRegistroAgenda.get('nombre'); }
  get apellido() { return this.formRegistroAgenda.get('apellido'); }
  get direccion() { return this.formRegistroAgenda.get('direccion'); }
  get fecha() { return this.formRegistroAgenda.get('fecha'); }
  get correo() { return this.formRegistroAgenda.get('correo'); }
  get telefono() { return this.formRegistroAgenda.get('telefono'); }

  formRegistroAgenda = new FormGroup({
    identificacion: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    direccion: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    correo: new FormControl('',[Validators.required,Validators.email]),
    telefono: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(5)])
  });

  ngOnInit(): void {
    this.persona = new Persona();
  }

  GuardarPersona() {
    this.clienteService.post(this.persona).subscribe(result => {
        if(result!=null){
          alert('se creo la persona con identificacion :'+result.identificacion);
        }else{
          alert('no se pudo registrar la persona con identificacion: '+this.persona.identificacion);
        }
    });
  }
}
