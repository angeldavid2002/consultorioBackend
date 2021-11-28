import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { HistoriaService } from 'src/app/services/historia.service';
import { Historia } from '../../Models/Historia';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-registrar-historia',
  templateUrl: './registrar-historia.component.html',
  styleUrls: ['./registrar-historia.component.css']
})
export class RegistrarHistoriaComponent implements OnInit {

  searchText:string;
  buscar: boolean;
  historia: Historia;
  personas:Persona[];
  constructor(private historiaService:HistoriaService,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.historia=new Historia();
    this.buscar=false;
  }
  llenarDatos(identificacion:string){
    this.historia.idPaciente=identificacion;
  }
  buscarPersonas(){
    this.buscar=true;
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }
  GuardarHistoria(){
    this.historiaService.post(this.historia).subscribe(result => {
      if(result!=null){
        alert('se creo la historia');
      }else{
        alert('no se pudo registrar la historia de la persona con identificacion: '+this.historia.idPaciente);
      }
  });
  }
  limpiar(){
    this.historia=new Historia;
    this.searchText= '';
  }
}
