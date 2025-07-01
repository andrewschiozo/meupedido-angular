import { Component } from '@angular/core';
import { ClienteTable } from '../../components/cliente-table/cliente-table';
import { Cliente } from '../../models/cliente.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-cliente',
    imports: [ClienteTable, RouterModule],
    templateUrl: './page-cliente.html',
    styleUrl: './page-cliente.css'
})
export class PageCliente {
    clientes: Cliente[] = []

    public constructor(private router: Router) {

    }

    handleTableEditarEvent(cliente: Cliente) {
        // this.services.store.cliente.setEntityToEdit(cliente);
        this.router.navigate(['/cliente/editar']);
    }

    handleTableExcluirEvent(cliente: Cliente) {
        // this.services.store.cliente.remove(cliente.id);
        // this.clientes = this.services.store.cliente.getData();
    }
}
