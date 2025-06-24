import { Injectable } from '@angular/core';
import { Store } from './store';
import { Produto } from '../../components/produto/produto';

@Injectable({
    providedIn: 'root'
})
export class StoreProduto extends Store {
    protected override _data: Produto[] = [];
    protected override entityToEdit: Produto | null = null;
    protected static override instance: StoreProduto;

    private constructor() {
        super();
        this._data = [];
        this.save({ id: 1, nome: 'Produto 1', preco: 10.55, descricao: 'Descrição do produto 1', imagem: 'https://via.placeholder.com/150', qtdEstoque: 10, categoria: 'Categoria 1' });
        this.save({ id: 2, nome: 'Produto 2', preco: 20.12, descricao: 'Descrição do produto 2', imagem: 'https://via.placeholder.com/150', qtdEstoque: 20, categoria: 'Categoria 2' });
        this.save({ id: 3, nome: 'Produto 3', preco: 30.65, descricao: 'Descrição do produto 3', imagem: 'https://via.placeholder.com/150', qtdEstoque: 30, categoria: 'Categoria 3' });
        this.save({ id: 4, nome: 'Produto 4', preco: 40.98, descricao: 'Descrição do produto 4', imagem: 'https://via.placeholder.com/150', qtdEstoque: 40, categoria: 'Categoria 4' });
    }
}
