import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-eliminar-agenda',
  templateUrl: './eliminar-agenda.component.html',
  styleUrls: ['./eliminar-agenda.component.css']
})
export class EliminarAgendaComponent implements OnInit {

  constructor(private citaService:CitaService) { }
  searchText: number;
  ngOnInit(): void {
  }

  eliminar(){
    this.citaService.delete(this.searchText).subscribe(result => {
        if(result!=null){
          alert('cita eliminada :'+JSON.stringify(result));
        }else{
          alert('no se pudo eliminar la cita: '+JSON.stringify(this.searchText));
        }
    });
  }

}
