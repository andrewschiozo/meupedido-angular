import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cliente } from '../cliente';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cliente-form',
    imports: [ReactiveFormsModule],
    templateUrl: './cliente-form.html',
    styleUrl: './cliente-form.css'
})
export class ClienteForm {

    @Input() cliente!: Cliente;
    @Output() submitEvent = new EventEmitter<Cliente>();

    formCliente!: FormGroup;

    ngOnInit(): void {
        this.formCliente = new FormGroup({
            id: new FormControl<number>(this.cliente.id),
            nome: new FormControl<string>(this.cliente.nome, Validators.required),
            telefone: new FormControl<string>(this.cliente.telefone),
            email: new FormControl<string>(this.cliente.email),
            endereco: new FormControl<string>(this.cliente.endereco),
        });
        return;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['cliente'] && this.formCliente) {
            this.formCliente.patchValue(changes['cliente'].currentValue);
        }
    }

    handleSubmit(form: any): void {
        const cliente = {
            id: this.formCliente.value.id,
            nome: this.formCliente.value.nome,
            telefone: this.formCliente.value.telefone,
            email: this.formCliente.value.email,
            endereco: this.formCliente.value.endereco
        };
        this.submitEvent.emit(cliente);
        this.formCliente.reset();
        return;
    }

}
