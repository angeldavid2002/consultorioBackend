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
  constructor(private clienteService:ClienteService) { }
  personas:Persona[];
  buscar:boolean;
  searchText:string;
  ngOnInit(): void {
    this.persona = new Persona();
    this.buscar=false;
  }
  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  EditarPersona() {
    this.clienteService.put(this.persona).subscribe(result => {
      if(result!=null){
        if(result.Error==true){
          alert('ocurrio un error inesperado: '+result.mensaje)
        }else{
          alert('mensaje: '+result.mensaje);
        }
      }
    });
  }

}
