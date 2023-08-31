import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../i-pensamento';
import { PensamentosService } from '../pensamentos.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //objeto array - lista de pensamentos
  listaPensamentos: Pensamento[] = [];

  // Consumir JsonServer - CRUD
  constructor(
    private service: PensamentosService){}

  //Ciclo de vida do componete: logica de programação a ser executada no carregamento do componente
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    })
  }
}
