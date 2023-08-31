import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Atributo
  pensamento = {
    conteudo: 'I love angular',
    autoria: 'Mariana',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
