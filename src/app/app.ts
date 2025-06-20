import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Menu } from "./components/menu/menu";
import { Store } from "./services/store/store.interface";
import { StoreCliente } from './services/store/store-cliente';
import { StoreProduto } from './services/store/store-produto';

@Component({
    selector: 'app-root',
    imports: [Menu, RouterModule, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'Meu Pedido';
    services = {
        store: {
            cliente: {} as Store,
            produto: {} as Store
        }
    };

    public constructor()
    {
        this.services.store.cliente = StoreCliente.getInstance();
        this.services.store.produto = StoreProduto.getInstance();
    }
}
