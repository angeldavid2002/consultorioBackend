import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {
  persona: Persona;
  fecha: string;
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.persona = new Persona();
  }

  EditarPersona() {
    this.extraerFecha();
    this.clienteService.put(this.persona).subscribe(result => {
        if(result!=null){
          alert('persona actualizada :'+JSON.stringify(result));
        }else{
          alert('no se pudo actualizar la persona'+JSON.stringify(this.persona));
        }
    });
  }
  extraerFecha(){
    if((document.getElementById("fecha-seleccion")as HTMLInputElement).value.toString()!="Invalid Date"){
      this.persona.añoNacimiento= new Date((document.getElementById("fecha-seleccion")as HTMLInputElement).value);
    }
  }

}
