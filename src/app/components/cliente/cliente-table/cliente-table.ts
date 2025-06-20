import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICliente } from '../i-cliente';

@Component({
    selector: 'app-cliente-table',
    imports: [],
    templateUrl: './cliente-table.html',
    styleUrl: './cliente-table.css'
})
export class ClienteTable {
    @Input() data!: ICliente[]
    @Output() editarEvent = new EventEmitter<ICliente>()
    @Output() excluirEvent = new EventEmitter<ICliente>()

    editar(cliente: ICliente) {
        this.editarEvent.emit(cliente);
    }

    excluir(cliente: ICliente) {
        this.excluirEvent.emit(cliente);
    }
}