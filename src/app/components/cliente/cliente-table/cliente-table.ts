import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-cliente-table',
    imports: [],
    templateUrl: './cliente-table.html',
    styleUrl: './cliente-table.css'
})
export class ClienteTable {
    @Input() data!: Cliente[]
    @Output() editarEvent = new EventEmitter<Cliente>()
    @Output() excluirEvent = new EventEmitter<Cliente>()

    editar(cliente: Cliente) {
        this.editarEvent.emit(cliente);
    }

    excluir(cliente: Cliente) {
        this.excluirEvent.emit(cliente);
    }
}