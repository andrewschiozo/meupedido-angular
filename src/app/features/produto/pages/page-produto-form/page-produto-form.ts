import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutoForm } from '../../components/produto-form/produto-form';
import { Produto } from '../../models/produto.interface';
import { Router } from '@angular/router';
import { ApiProduto } from '../../services/api-produto';

@Component({
    selector: 'app-page-produto-form',
    imports: [ProdutoForm],
    templateUrl: './page-produto-form.html',
    styleUrl: './page-produto-form.css'
})
export class PageProdutoForm{
    produto: Produto = { id: 0, nome: '', preco: 0.00, descricao: '', imagem: '', qtdEstoque: 0, categoria: '' };

    constructor(private router: Router, private produtoApiService: ApiProduto) {}

    handleFormSubmitEvent(produto: Produto) {
        this.produtoApiService.create(produto).subscribe((response) => console.log(response));
        this.router.navigate(['/produto']);
    }

}
