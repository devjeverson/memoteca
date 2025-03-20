import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPesamentos = [
    //{
    //  conteudo: 'Passo informações para o componente filho',
    //  autoria: 'Componete Pai',
    //  modelo: 'modelo3'
    //},
    //{
    //conteudo: 'Minha propriedade é decorada com @Input()',
    //autoria: 'Componete filho',
    // modelo: 'modelo2'
    //}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
