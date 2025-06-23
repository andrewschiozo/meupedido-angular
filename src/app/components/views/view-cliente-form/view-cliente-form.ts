import { Component } from '@angular/core';
import { ClienteForm } from '../../cliente/cliente-form/cliente-form';
import { Cliente } from '../../cliente/cliente';
import { App } from '../../../app';

@Component({
    selector: 'app-view-cliente-form',
    imports: [ClienteForm],
    templateUrl: './view-cliente-form.html',
    styleUrl: './view-cliente-form.css'
})
export class ViewClienteForm extends App{
    cliente: Cliente = { id: 0, nome: '', telefone: '', email: '', endereco: '' };

    constructor() {
        super();
        this.cliente = this.services.store.cliente.getEntityToEdit() || { id: 0, nome: '', telefone: '', email: '', endereco: '' };
    }

    handleFormSubmitEvent(cliente: Cliente) {
        try{
            this.services.store.cliente.save(cliente);
            this.services.store.cliente.clearEntityToEdit();
            this.router.navigate(['/cliente']);
        }
        catch(Error){
            alert(Error);
        }
    }
}
