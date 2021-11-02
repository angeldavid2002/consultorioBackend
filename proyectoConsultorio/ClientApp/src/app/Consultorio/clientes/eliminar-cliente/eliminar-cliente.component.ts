import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Persona } from '../../Models/Persona';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {
  searchText:string;
  persona:Persona;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }
  eliminar(){
    this.clienteService.delete(this.searchText).subscribe(result => {
      if(result!=null){
        alert("registro borrado");
      }
    });
  }


}
