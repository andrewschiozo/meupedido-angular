import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../models/produto.interface';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-produto-table',
    imports: [NgbDropdownModule],
    templateUrl: './produto-table.html',
    styleUrl: './produto-table.css'
})
export class ProdutoTable {
    @Input() data!: Produto[]
    @Output() editarEvent = new EventEmitter<Produto>()
    @Output() excluirEvent = new EventEmitter<Produto>()

    public class = 'table table-hover';
    public tableHeader = ['#', 'Nome', 'Preço', 'Descrição', /*'Imagem',*/ 'Qtd. Estoque', /*'Categoria',*/ 'Ações'];

    editar(registro: Produto) {
        this.editarEvent.emit(registro);
    }

    excluir(registro: Produto) {
        this.excluirEvent.emit(registro);
    }
}
