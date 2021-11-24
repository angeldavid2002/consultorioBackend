import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from '../Consultorio/Models/Persona';
import { tap, catchError } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
      );
  }
  delete(identificacion: string): Observable<string> {
    return this.http.delete<string>(this.baseUrl + 'api/Persona/'+identificacion)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<string>('Elimina Persona', null))
      );
  }
  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Persona/',persona)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
      );
  }
  put(persona: Persona):Observable<respuesta>{
    return this.http.put<respuesta>(this.baseUrl + 'api/Persona/',persona)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<respuesta>('Actualizar Persona', null))
      );
  }
  actualizarEstado(identificacion: string,estado:string):Observable<respuesta>{
    return this.http.put<respuesta>(this.baseUrl+'api/Persona/'+identificacion+'/'+estado,null)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<respuesta>('Actualizar Estado Persona', null))
      );
  }
}
class respuesta{
  Error:boolean;
  mensaje:string
}
