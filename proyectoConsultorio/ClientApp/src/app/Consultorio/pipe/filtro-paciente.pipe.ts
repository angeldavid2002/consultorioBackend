import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../Models/Persona';

@Pipe({
  name: 'filtroPaciente'
})
export class FiltroPacientePipe implements PipeTransform {

  transform(personas: Persona[], searchText: string): any {
    if (searchText == null) return personas;
      return personas.filter(p =>
      p.nombre.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
  }
}

