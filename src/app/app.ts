import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Menu } from "./shared/components/menu/menu";
import { Store as StoreInterface } from "./core/services/store.interface";
import { StoreProduto } from './features/produto/services/store-produto';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreCliente } from './features/cliente/services/store-cliente';
import { StoreCategoria } from './features/categoria/services/store-categoria';

@Component({
    selector: 'app-root',
    imports: [Menu, RouterModule, RouterOutlet, NgbModule],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {

    protected title = 'Meu Pedido';
    // public router: Router = new Router();

    // services = {
    //     store: {
    //         produto: {} as StoreInterface,
    //         cliente: {} as StoreInterface,
    //         categoria: {} as StoreInterface
    //     }
    // };

    public constructor(protected router: Router)
    {
        // this.services.store.produto = StoreProduto.getInstance();
        // this.services.store.cliente = StoreCliente.getInstance();
        // this.services.store.categoria = StoreCategoria.getInstance();        
    }
}
