import { Injectable } from '@angular/core';
import { ICliente } from '../../components/cliente/i-cliente';
import { Store } from './store.interface';

@Injectable({
    providedIn: 'root'
})
export class StoreClient implements Store {
    private _data: ICliente[] = [];
    private static instance: StoreClient | null = null;
    private static lastId: number = 0;
    private static maxLength: number = 10;

    private constructor() {
        this.load();
    }

    static getInstance(): StoreClient {
        return StoreClient.instance || (StoreClient.instance = new StoreClient());
    }

    getData(): ICliente[] {
        return this._data;
    }

    protected add(cliente: ICliente): ICliente {
        if (this._data.length >= StoreClient.maxLength) {
            throw new Error('Limite de clientes atingido');
        }
        cliente.id = ++StoreClient.lastId;
        this._data.push(cliente);
        return cliente;
    }

    public remove(id: number): boolean {
        const index = this._data.findIndex(cliente => cliente.id === id);
        if (index === -1) {
            throw new Error('Cliente não encontrado');
        }

        this._data = this._data.filter(cliente => cliente.id !== id);
        return true;
    }

    protected update(cliente: ICliente): ICliente {
        const index = this._data.findIndex(c => c.id === cliente.id);
        if (index === -1) {
            throw new Error('Cliente não encontrado');
        }
        this._data[index] = cliente;
        return cliente;
    }

    public getById(id: number): ICliente | undefined {
        return this._data.find(cliente => cliente.id === id);
    }

    public save(cliente: ICliente): ICliente {
        const index = this._data.findIndex(c => c.id === cliente.id);
        if (index === -1) {
            return this.add(cliente);
        }
        return this.update(cliente);
    }

    public load(): void {
        this._data = [];
        this.save({ id: 1, nome: 'João', telefone: '123456789', email: 'j@j.com', endereco: 'Rua 1' });
        this.save({ id: 2, nome: 'Maria', telefone: '123456789', email: 'm@m.com', endereco: 'Rua 2' });
        this.save({ id: 3, nome: 'Pedro', telefone: '123456789', email: 'p@p.com', endereco: 'Rua 3' });
        this.save({ id: 4, nome: 'Ana', telefone: '123456789', email: 'a@a.com', endereco: 'Rua 4' });
        this.save({ id: 5, nome: 'Carlos', telefone: '123456789', email: 'c@c.com', endereco: 'Rua 5' });
        return;
    }
}
