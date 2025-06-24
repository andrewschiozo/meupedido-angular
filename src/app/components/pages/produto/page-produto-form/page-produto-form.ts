import { Component } from '@angular/core';
import { ProdutoForm } from '../../../produto/produto-form/produto-form';
import { App } from '../../../../app';
import { Produto } from '../../../produto/produto';

@Component({
    selector: 'app-page-produto-form',
    imports: [ProdutoForm],
    templateUrl: './page-produto-form.html',
    styleUrl: './page-produto-form.css'
})
export class PageProdutoForm extends App {
    produto: Produto = { id: 0, nome: '', preco: 0, descricao: '', imagem: '', qtdEstoque: 0, categoria: '' };

    constructor() {
        super();
        this.produto = this.services.store.produto.getEntityToEdit() || { id: 0, nome: '', preco: 0, descricao: '', imagem: '', qtdEstoque: 0, categoria: '' };
    }

    handleFormSubmitEvent(produto: Produto) {
        try {
            this.services.store.produto.save(produto);
            this.services.store.produto.clearEntityToEdit();
            this.router.navigate(['/produto']);
        }
        catch (Error) {
            alert(Error);
        }
    }

}
