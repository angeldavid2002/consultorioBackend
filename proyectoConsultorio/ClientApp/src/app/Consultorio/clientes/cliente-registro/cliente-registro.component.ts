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
    this.clienteService.post(this.persona).subscribe(result => {
        if(result!=null){
          alert('se creo la persona con identificacion :'+result.identificacion);
        }else{
          alert('no se pudo registrar la persona con identificacion: '+this.persona.identificacion);
        }
    });
  }
}
