import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from '../../Models/Cita';
@Component({
  selector: 'app-consultar-agenda',
  templateUrl: './consultar-agenda.component.html',
  styleUrls: ['./consultar-agenda.component.css']
})
export class ConsultarAgendaComponent implements OnInit {
  searchText:string;
  citas:Cita[];
  constructor(private citaService: CitaService) { }

  ngOnInit(): void {
    this.citaService.get().subscribe(x=>{this.citas=x});
  }


}
