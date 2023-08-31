import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentosService {

  // dependencia da classe HttpClient
  constructor(private http: HttpClient) { }
}
