import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { HistoriaService } from 'src/app/services/historia.service';
import { Historia } from '../../Models/Historia';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-editar-historia',
  templateUrl: './editar-historia.component.html',
  styleUrls: ['./editar-historia.component.css']
})
export class EditarHistoriaComponent implements OnInit {
  searchText:string;
  historias:Historia[];
  buscar: boolean;
  historia:Historia;
  personas:Persona[];

  constructor(private historiaService:HistoriaService,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.historia=new Historia();
    this.buscar=false;
  }
  buscarHistorias(){
    this.buscar=true;
    this.historiaService.get().subscribe(result => {
      this.historias = result;
    });
  }
  asignarHistoria(historia:Historia){
    this.historia=historia;
  }
  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  editarHistoria(){
    this.historiaService.put(this.historia).subscribe(result => {
      if(result!=null){
        alert(result.mensaje);
      }else{
        alert('Error inesperado');
      }
  });
  }
  llenarDatos(identificacion:string){
    this.historia.idPaciente=identificacion;
  }
  limpiar(){
    this.historia=new Historia;
    this.searchText= '';
  }

}
