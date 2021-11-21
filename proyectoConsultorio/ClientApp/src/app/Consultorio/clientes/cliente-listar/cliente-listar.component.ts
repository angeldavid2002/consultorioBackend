import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  searchText:string;
  personas:Persona[];
  buscar:boolean;
  persona:Persona;
  mensaje:string;
  constructor(private clienteService: ClienteService) { }
  ngOnInit() {
    this.buscar=false;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  buscarPersonas(){
    this.buscar=true;
  }
  cambiarEstado(persona:Persona){
    this.clienteService.actualizarEstado(persona.identificacion,persona.estado).subscribe(result => {
      this.mensaje=result.toString();
    });
    alert(this.mensaje);
  }
}
