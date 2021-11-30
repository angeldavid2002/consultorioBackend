import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClienteService } from 'src/app/services/cliente.service';
import { CuadroModalComponent } from '../../modal/cuadro-modal/cuadro-modal.component';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {
  persona: Persona;
  constructor(private clienteService:ClienteService,private dialog: MatDialog) { }

  personas:Persona[];
  buscar:boolean;
  searchText:string;

  openDialog(texto:String):void {
    this.dialog.open(CuadroModalComponent,{data:texto});
  }

  ngOnInit(): void {
    this.persona = new Persona();
    this.buscar=false;
  }

  llenarDatos(personaBuscada:Persona){
    this.persona=personaBuscada;
  }

  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
    this.openDialog('lista cargada');
  }
  EditarPersona() {
    this.clienteService.put(this.persona).subscribe(result => {
      if(result!=null){
        if(result.Error==true){
          this.openDialog('ocurrio un error inesperado: '+result.mensaje)
        }else{
          this.openDialog('mensaje: '+result.mensaje);
        }
      }
    });
  }
  cerrar(){
    this.openDialog('se limpio')
  }

}
