import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Persona } from '../../Models/Persona';
@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  persona: Persona;
  fecha:string
  constructor(private clienteService:ClienteService) { }
  ngOnInit(): void {
    this.persona = new Persona();
  }
  GuardarPersona() {
    this.extraerFecha();
    this.clienteService.post(this.persona).subscribe(result => {
        if(result!=null){
          alert('persona creada :'+JSON.stringify(result));
        }else{
          alert('no se pudo registrar la persona'+JSON.stringify(this.persona));
        }
    });
  }
  extraerFecha(){
    if((document.getElementById("fecha-seleccion")as HTMLInputElement).value.toString()!="Invalid Date"){
      this.persona.añoNacimiento= new Date((document.getElementById("fecha-seleccion")as HTMLInputElement).value);
    }
  }
}
