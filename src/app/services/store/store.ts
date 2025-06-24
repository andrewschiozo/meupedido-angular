import { Injectable } from '@angular/core';
import { Store as StoreInterface } from './store.interface';

@Injectable({
    providedIn: 'root'
})
export class Store implements StoreInterface {
    protected _data: any[] = [];
    protected static instance: StoreInterface;
    protected lastId: number = 0;
    protected maxLength: number = 10;
    protected entityToEdit: any | null = null;

    static getInstance(): StoreInterface {
        return this.instance || new this();
    }
    getData() {
        return this._data;
    }
    remove(id: number): boolean {
        const index = this._data.findIndex(registro => registro.id === id);
        if (index === -1) {
            throw new Error('Registro não encontrado');
        }

        this._data = this._data.filter(registro => registro.id !== id);
        return true;
    }
    getById(id: number) {
        return this._data.find(registro => registro.id === id);
    }
    save(registro: any) {
        const index = this._data.findIndex(c => c.id === registro.id);
        if (index === -1) {
            return this.add(registro);
        }
        return this.update(registro);
    }

    getEntityToEdit() {
        return this.entityToEdit;
    }
    setEntityToEdit(entity: any): void {
        this.entityToEdit = entity;
    }
    clearEntityToEdit(): void {
        this.entityToEdit = null;
    }

    protected update(registro: any): any {
        const index = this._data.findIndex(c => c.id === registro.id);
        if (index === -1) {
            throw new Error('Registro não encontrado');
        }
        this._data[index] = registro;
        return registro;
    }

    protected add(registro: any): any {
        if (this._data.length >= this.maxLength) {
            throw new Error('Limite de registros atingido');
        }
        registro.id = ++this.lastId;
        this._data.push(registro);
        return registro;
    }
}
