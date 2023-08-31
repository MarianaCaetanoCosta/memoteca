import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../i-pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //objeto array - lista de pensamentos
  listaPensamentos: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
