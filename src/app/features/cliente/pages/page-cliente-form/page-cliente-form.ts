import { Component } from '@angular/core';
import { ClienteForm } from '../../components/cliente-form/cliente-form';
import { Cliente } from '../../models/cliente.interface';
import { App } from '../../../../app';

@Component({
    selector: 'app-page-cliente-form',
    imports: [ClienteForm],
    templateUrl: './page-cliente-form.html',
    styleUrl: './page-cliente-form.css'
})
export class PageClienteForm extends App{
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
