import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Cita } from '../Consultorio/Models/Cita';
import { Persona } from '../Consultorio/Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  post(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.baseUrl + 'api/Cita/',cita)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cita>('Registrar Persona', null))
      );
  }

  delete(id:number): Observable<string>{
    return this.http.delete<string>(this.baseUrl + 'api/Cita/'+id)
      .pipe(
        tap(_ => this.handleErrorService.log('datos cita')),
        catchError(this.handleErrorService.handleError<string>('Eliminar cita', null))
      );
  }

}
