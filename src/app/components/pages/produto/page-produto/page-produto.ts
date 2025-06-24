import { Component } from '@angular/core';
import { ProdutoForm } from '../../../produto/produto-form/produto-form';
import { ProdutoTable } from '../../../produto/produto-table/produto-table';
import { Produto } from '../../../produto/produto';
import { App } from '../../../../app';

@Component({
  selector: 'app-view-produto',
  imports: [ProdutoForm, ProdutoTable],
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
        this.produto = produto;
    }

    handleTableExcluirEvent(produto: Produto) {
        this.services.store.produto.remove(produto.id);
        this.produtos = this.services.store.produto.getData();
    }
}
