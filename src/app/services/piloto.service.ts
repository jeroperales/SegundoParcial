import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Piloto } from '../interfaces/piloto.interface';

@Injectable({
  providedIn: 'root'
})
export class PilotoService {
  
  //FUNCIONES HTTP
  http = inject(HttpClient);

  urlBase = 'http://local:host/3000'

  //get
  getPilotos():Observable<Piloto[]>{
    return this.http.get<Piloto[]>(this.urlBase)

  }


  //post
  postPiloto(piloto: Piloto): Observable<Piloto>{
    return this.http.post<Piloto>(this.urlBase, piloto)

  }
  //put
  putPiloto(piloto: Piloto, id: number): Observable<Piloto> {
    return this.http.put<Piloto>(`${this.urlBase}/${id}`, piloto)
  }

  //delete by nombre
  deletePiloto(nombre: string): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${nombre}`)
  }

}