import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../produto';

@Component({
    selector: 'app-produto-table',
    imports: [],
    templateUrl: './produto-table.html',
    styleUrl: './produto-table.css'
})
export class ProdutoTable {
    @Input() data!: Produto[]
    @Output() editarEvent = new EventEmitter<Produto>()
    @Output() excluirEvent = new EventEmitter<Produto>()

    editar(registro: Produto) {
        this.editarEvent.emit(registro);
    }

    excluir(registro: Produto) {
        this.excluirEvent.emit(registro);
    }
}
