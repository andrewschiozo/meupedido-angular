import { Component } from '@angular/core';
import { ClienteTable } from '../../cliente/cliente-table/cliente-table';
import { Cliente } from '../../cliente/cliente';
import { App } from '../../../app';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Table } from '../../common/table/table';

@Component({
    selector: 'app-view-cliente',
    imports: [ClienteTable, CommonModule, RouterModule],
    templateUrl: './view-cliente.html',
    styleUrl: './view-cliente.css'
})
export class ViewCliente extends App {
    clientes: Cliente[] = this.services.store.cliente.getData();


    handleTableEditarEvent(cliente: Cliente) {
        this.services.store.cliente.setEntityToEdit(cliente);
        this.router.navigate(['/cliente/editar']);
    }

    handleTableExcluirEvent(cliente: Cliente) {
        this.services.store.cliente.remove(cliente.id);
        this.clientes = this.services.store.cliente.getData();
    }
}
