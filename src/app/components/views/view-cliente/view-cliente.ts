import { Component } from '@angular/core';
import { ClienteTable } from '../../cliente/cliente-table/cliente-table';
import { ClienteForm } from '../../cliente/cliente-form/cliente-form';
import { ICliente } from '../../cliente/i-cliente';
import { App } from '../../../app';

@Component({
    selector: 'app-view-cliente',
    imports: [ClienteForm, ClienteTable],
    templateUrl: './view-cliente.html',
    styleUrl: './view-cliente.css'
})
export class ViewCliente extends App {
    
    cliente: ICliente = { id: 0, nome: '', telefone: '', email: '', endereco: '' };
    clientes: ICliente[] = this.services.store.cliente.getData();

    handleFormSubmitEvent(cliente: ICliente) {
        try{
            this.services.store.cliente.save(cliente);
        }
        catch(Error){
            alert(Error);
        }
    }

    handleTableEditarEvent(cliente: ICliente) {
        this.cliente = cliente;
    }

    handleTableExcluirEvent(cliente: ICliente) {
        this.services.store.cliente.remove(cliente.id);
        this.clientes = this.services.store.cliente.getData();
    }
}
