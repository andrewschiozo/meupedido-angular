import { Injectable } from '@angular/core';
import { Store } from './store.interface';
import { Produto } from '../../components/produto/produto';

@Injectable({
    providedIn: 'root'
})
export class StoreProduto implements Store {
    private _data: Produto[] = [];
    private static instance: StoreProduto | null = null;
    private static lastId: number = 0;
    private static maxLength: number = 20;
    private static entityToEdit: Produto | null = null;

    private constructor() {
        this.load();
    }

    static getInstance(): StoreProduto {
        return StoreProduto.instance || (StoreProduto.instance = new StoreProduto());
    }

    getData(): Produto[] {
        return this._data;
    }

    protected add(novoRegistro: Produto): Produto {
        if (this._data.length >= StoreProduto.maxLength) {
            throw new Error('Limite de produtos atingido');
        }
        novoRegistro.id = ++StoreProduto.lastId;
        this._data.push(novoRegistro);
        return novoRegistro;
    }

    public remove(id: number): boolean {
        const index = this._data.findIndex(registro => registro.id === id);
        if (index === -1) {
            throw new Error('Produto não encontrado');
        }

        this._data = this._data.filter(registro => registro.id !== id);
        return true;
    }

    protected update(registro: Produto): Produto {
        const index = this._data.findIndex(r => r.id === registro.id);
        if (index === -1) {
            throw new Error('Produto não encontrado');
        }
        this._data[index] = registro;
        return registro;
    }

    public getById(id: number): Produto | undefined {
        return this._data.find(registro => registro.id === id);
    }

    public save(registro: Produto): Produto {
        const index = this._data.findIndex(r => r.id === registro.id);
        if (index === -1) {
            return this.add(registro);
        }
        return this.update(registro);
    }

    public getEntityToEdit(): Produto | null {
        return StoreProduto.entityToEdit;
    }

    public setEntityToEdit(produto: Produto): void {
        StoreProduto.entityToEdit = produto;
    }

    public clearEntityToEdit(): void {
        StoreProduto.entityToEdit = null;
    }

    public load(): void {
        this._data = [];
        this.save({ id: 1, nome: 'Produto 1', preco: 10.55, descricao: 'Descrição do produto 1', imagem: 'https://via.placeholder.com/150', quantidade: 10, categoria: 'Categoria 1' });
        this.save({ id: 2, nome: 'Produto 2', preco: 20.12, descricao: 'Descrição do produto 2', imagem: 'https://via.placeholder.com/150', quantidade: 20, categoria: 'Categoria 2' });
        this.save({ id: 3, nome: 'Produto 3', preco: 30.65, descricao: 'Descrição do produto 3', imagem: 'https://via.placeholder.com/150', quantidade: 30, categoria: 'Categoria 3' });
        this.save({ id: 4, nome: 'Produto 4', preco: 40.98, descricao: 'Descrição do produto 4', imagem: 'https://via.placeholder.com/150', quantidade: 40, categoria: 'Categoria 4' });
        return;
    }
}
