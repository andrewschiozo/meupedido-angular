import { Component } from '@angular/core';
import { ProdutoTable } from '../../../produto/produto-table/produto-table';
import { Produto } from '../../../produto/produto';
import { App } from '../../../../app';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-produto',
  imports: [ProdutoTable, RouterModule],
  templateUrl: './page-produto.html',
  styleUrl: './page-produto.css'
})
export class PageProduto extends App{
    produto: Produto = { id: 0, nome: '', preco: 0, descricao: '', imagem: '', quantidade: 0, categoria: '' };
    produtos: Produto[] = this.services.store.produto.getData();

    handleFormSubmitEvent(produto: Produto) {
        try{
            this.services.store.produto.save(produto);
        }
        catch(Error){
            alert(Error);
        }
    }

    handleTableEditarEvent(produto: Produto) {
        this.services.store.produto.setEntityToEdit(produto);
        this.router.navigate(['/produto/editar']);
    }

    handleTableExcluirEvent(produto: Produto) {
        this.services.store.produto.remove(produto.id);
        this.produtos = this.services.store.produto.getData();
    }
}
