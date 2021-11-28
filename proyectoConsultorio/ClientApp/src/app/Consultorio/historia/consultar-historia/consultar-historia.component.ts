import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { ClienteService } from "src/app/services/cliente.service";
import { Historia } from '../../Models/Historia';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-consultar-historia',
  templateUrl: './consultar-historia.component.html',
  styleUrls: ['./consultar-historia.component.css']
})
export class ConsultarHistoriaComponent implements OnInit {
  historias:Historia[];
  buscar: boolean;
  searchText:string;
  persona:Persona;
  consultaPersona:boolean;
  historia:Historia;

  constructor(private historiaService:HistoriaService,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.buscar=false;
    this.consultaPersona=false;
  }
  buscarHistorias(){
    this.buscar=true;
    this.historiaService.get().subscribe(result => {
      this.historias = result;
    });
  }
  consultarPersonaHistoria(historia:Historia){
    this.consultaPersona=true;
    this.clienteService.consultarUno(historia.idPaciente).subscribe(result => {
      this.persona = result.persona;
    });
    this.historia=historia;
  }
}
