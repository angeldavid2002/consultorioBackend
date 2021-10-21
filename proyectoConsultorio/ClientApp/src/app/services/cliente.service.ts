import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from '../Consultorio/Models/Persona';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    baseUrl: string;
    constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleHttpErrorService)
    {
      this.baseUrl = baseUrl;
    }
    get(): Observable<Persona[]> {
      return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
          );
    }
}
