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
  respuesta:String;
  persona:Persona;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }
  eliminar(){
    this.clienteService.delete(this.searchText).subscribe(result => {
      this.respuesta = result;
    });
    alert(this.respuesta);
  }


}
