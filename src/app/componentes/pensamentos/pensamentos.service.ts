import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './i-pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  private readonly API = 'http://localhost:3000/pensamentos';

  // dependencia da classe HttpClient
  constructor(private http: HttpClient) { }

  // CRUD
  lista() {
    return this.http.get<Pensamento[]>(this.API)
  }

}
