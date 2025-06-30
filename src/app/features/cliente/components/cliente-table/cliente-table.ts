import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-cliente-table',
    imports: [NgbDropdownModule],
    templateUrl: './cliente-table.html',
    styleUrl: './cliente-table.css'
})
export class ClienteTable {
    @Input() data!: Cliente[]
    @Output() editarEvent = new EventEmitter<Cliente>()
    @Output() excluirEvent = new EventEmitter<Cliente>()

    public class = 'table table-hover';
    public tableHeader = ['#', 'Nome', 'Telefone', 'E-mail', 'Endereço', 'Ações'];

    editar(cliente: Cliente) {
        this.editarEvent.emit(cliente);
    }

    excluir(cliente: Cliente) {
        this.excluirEvent.emit(cliente);
    }
}