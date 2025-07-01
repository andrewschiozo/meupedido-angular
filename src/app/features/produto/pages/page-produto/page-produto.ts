import { Component } from '@angular/core';
import { ProdutoTable } from '../../components/produto-table/produto-table';
import { Produto } from '../../models/produto.interface';
import { ApiProduto } from '../../services/api-produto';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-produto',
  imports: [ProdutoTable, RouterModule],
  templateUrl: './page-produto.html',
  styleUrl: './page-produto.css'
})
export class PageProduto {
    produtos: Produto[] = [];

    constructor(private router: Router, private produtoApiService: ApiProduto) { }

    ngOnInit() {
        this.loadProdutos();
    }

    public loadProdutos() {
        this.produtoApiService.get().subscribe(produtos => {
            this.produtos = produtos;
        });
    }

    handleTableEditarEvent(produto: Produto) {
        // this.services.store.produto.setEntityToEdit(produto);
        this.router.navigate(['/produto/editar']);
    }

    handleTableExcluirEvent(produto: Produto) {
        // this.services.store.produto.remove(produto.id);
        // this.produtos = this.services.store.produto.getData();
    }
}
