import { Injectable } from '@angular/core';
import { Cliente } from '../../components/cliente/cliente';
import { Store } from './store';

@Injectable({
    providedIn: 'root'
})
export class StoreCliente extends Store {
    protected override _data: Cliente[] = [];
    protected static override instance: StoreCliente;
    protected static entityToEdit: Cliente | null = null;

    private constructor() {
        super();
        this._data = [];
        this.save({ id: 1, nome: 'João', telefone: '123456789', email: 'j@j.com', endereco: 'Rua 1' });
        this.save({ id: 2, nome: 'Maria', telefone: '123456789', email: 'm@m.com', endereco: 'Rua 2' });
        this.save({ id: 3, nome: 'Pedro', telefone: '123456789', email: 'p@p.com', endereco: 'Rua 3' });
        this.save({ id: 4, nome: 'Ana', telefone: '123456789', email: 'a@a.com', endereco: 'Rua 4' });
        this.save({ id: 5, nome: 'Carlos', telefone: '123456789', email: 'c@c.com', endereco: 'Rua 5' });
    }

}
