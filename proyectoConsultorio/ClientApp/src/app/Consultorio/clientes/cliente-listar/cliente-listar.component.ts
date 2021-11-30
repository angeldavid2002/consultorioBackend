import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClienteService } from 'src/app/services/cliente.service';
import { CuadroModalComponent } from '../../modal/cuadro-modal/cuadro-modal.component';
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

  constructor(private clienteService: ClienteService,private dialog: MatDialog) { }
  ngOnInit() {
    this.buscar=false;
  }

  openDialog(texto:String):void {
    this.dialog.open(CuadroModalComponent,{data:texto});
  }
  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
    this.openDialog('lista cargada');
  }
  cambiarEstado(identificacion:string,estado:string){
    this.clienteService.actualizarEstado(identificacion,estado).subscribe(result => {
      if(result!=null){
        if(result.Error==true){
          this.openDialog('ocurrio un error inesperado: '+result.mensaje)
        }else{
          this.openDialog('mensaje: '+result.mensaje);
        }
      }
    });
  }
}
