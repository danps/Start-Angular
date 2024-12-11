import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [  
    CommonModule 
  ],
  templateUrl: './produto-detalhe.component.html',
  styles: ``
})
export class ProdutoDetalheComponent implements OnInit {
   produto: Produto | undefined;
   
   constructor( 
    private route: ActivatedRoute,
    private produtoService: ProdutoService
    ) {}
   
    
    ngOnInit(): void {
      this.getProduto();
    }
  
    getProduto(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.produtoService.obterProdutoPorId(id).subscribe(
          (produto: Produto) => this.produto = produto,
          (error: any) => console.error(error)
        );
      }
    }
    
}

    
