import { Component } from '@angular/core';
import { ClienteTable } from '../../cliente/cliente-table/cliente-table';
import { ClienteForm } from '../../cliente/cliente-form/cliente-form';
import { Cliente } from '../../cliente/cliente';
import { App } from '../../../app';

@Component({
    selector: 'app-view-cliente',
    imports: [ClienteForm, ClienteTable],
    templateUrl: './view-cliente.html',
    styleUrl: './view-cliente.css'
})
export class ViewCliente extends App {
    
    cliente: Cliente = { id: 0, nome: '', telefone: '', email: '', endereco: '' };
    clientes: Cliente[] = this.services.store.cliente.getData();

    handleFormSubmitEvent(cliente: Cliente) {
        try{
            this.services.store.cliente.save(cliente);
        }
        catch(Error){
            alert(Error);
        }
    }

    handleTableEditarEvent(cliente: Cliente) {
        this.cliente = cliente;
    }

    handleTableExcluirEvent(cliente: Cliente) {
        this.services.store.cliente.remove(cliente.id);
        this.clientes = this.services.store.cliente.getData();
    }
}
