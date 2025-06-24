import { Injectable } from '@angular/core';
import { Categoria } from '../../components/categoria/categoria';
import { Store } from './store';

@Injectable({
    providedIn: 'root'
})
export class StoreCategoria extends Store {

    protected override _data: Categoria[] = [];
    protected override entityToEdit: Categoria | null = null;
    protected static override instance: StoreCategoria;

    constructor() {
        super();
        this._data = [];
        this.save({ id: 0, nome: 'Categoria 1'})
        this.save({ id: 0, nome: 'Categoria 2'})
        this.save({ id: 0, nome: 'Categoria 3'})
        this.save({ id: 0, nome: 'Categoria 4'})
        this.save({ id: 0, nome: 'Categoria 5'})
    }
}
