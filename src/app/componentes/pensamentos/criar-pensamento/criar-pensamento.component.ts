import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../i-pensamento';
import { PensamentosService } from '../pensamentos.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  //Adicionar comportamento: Objeto pensamento
  pensamento: Pensamento = {
    conteudo: '',
    autoria:'',
    modelo: ''
  }

  constructor(
    private service: PensamentosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }
}
