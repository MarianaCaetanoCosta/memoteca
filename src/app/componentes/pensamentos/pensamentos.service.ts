import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './i-pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  private readonly API = 'http://localhost:3000/pensamentos';

  // dependencia da classe HttpClient
  constructor(private http: HttpClient) { }

  // CRUD
  listar() {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }
}
