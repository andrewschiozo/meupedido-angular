import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Produto } from '../produto';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-produto-form',
    imports: [ReactiveFormsModule],
    templateUrl: './produto-form.html',
    styleUrl: './produto-form.css'
})
export class ProdutoForm {
    @Input() produto!: Produto;
    @Output() submitEvent = new EventEmitter<Produto>();

    formProduto!: FormGroup;

    ngOnInit(): void {
        this.formProduto = new FormGroup({
            id: new FormControl<number>(this.produto.id),
            nome: new FormControl<string>(this.produto.nome, Validators.required),
            preco: new FormControl<number>(this.produto.preco, Validators.required),
            descricao: new FormControl<string>(this.produto.descricao, Validators.required),
            imagem: new FormControl<string>(this.produto.imagem, Validators.required),
            quantidade: new FormControl<number>(this.produto.quantidade, Validators.required),
            categoria: new FormControl<string>(this.produto.categoria, Validators.required),
        });
        return;
    }
    

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['produto'] && this.formProduto) {
            this.formProduto.patchValue(changes['produto'].currentValue);
        }
    }

    handleSubmit(form: any): void {
        const produto = {
            id: this.formProduto.value.id,
            nome: this.formProduto.value.nome,
            preco: this.formProduto.value.preco,
            descricao: this.formProduto.value.descricao,
            imagem: this.formProduto.value.imagem,
            quantidade: this.formProduto.value.quantidade,
            categoria: this.formProduto.value.categoria
        };
        this.submitEvent.emit(produto);
        this.formProduto.reset();
        return;
    }
}
