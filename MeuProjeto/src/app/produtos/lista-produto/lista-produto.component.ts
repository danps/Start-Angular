import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';  
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  imports: [  
    RouterLink,  CommonModule 
  ],
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error => console.log(error)
      );
  }
}
