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
  }
  buscarPersonas(){
    this.searchText=this.persona.identificacion;
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  cambiarEstado(identificacion:string,estado:string){
    this.clienteService.actualizarEstado(identificacion,estado).subscribe(result => {
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
