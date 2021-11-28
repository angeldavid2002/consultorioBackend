import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { tap, catchError } from 'rxjs/operators';
import { Historia } from '../Consultorio/Models/Historia';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  baseUrl: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Historia[]> {
    return this.http.get<Historia[]>(this.baseUrl + 'api/Historia')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Historia[]>('Consulta Historia', null))
      );
  }

  delete(identificacion: string): Observable<string> {
    return this.http.delete<string>(this.baseUrl + 'api/Historia/'+identificacion)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<string>('Elimina Historia', null))
      );
  }
  post(historia: Historia): Observable<Historia> {
    return this.http.post<Historia>(this.baseUrl + 'api/Historia/',historia)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Historia>('Registrar Historia', null))
      );
  }
  put(historia: Historia):Observable<respuesta>{
    return this.http.put<respuesta>(this.baseUrl + 'api/Historia/',historia)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<respuesta>('Actualizar Historia', null))
      );
  }
}

class respuesta{
  Error:boolean;
  mensaje:string;
}
