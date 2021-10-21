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
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.get().subscribe(result => {
      this.personas = result;
    });
  }

}
