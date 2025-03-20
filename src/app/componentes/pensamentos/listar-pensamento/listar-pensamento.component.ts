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
    // {
    //   conteudo: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi',
    //   autoria: 'Componete Pai',
    //   modelo: 'modelo1'
    // },
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
