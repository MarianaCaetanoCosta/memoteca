import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  //Input é um decorator - informa para o componente "filho" que passará a receber informações do componente "pai".
  @Input() pensamento = {
    conteudo: 'I love angular',
    autoria: 'Mariana',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
