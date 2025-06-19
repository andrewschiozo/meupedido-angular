import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Menu } from "./components/menu/menu";

@Component({
    selector: 'app-root',
    imports: [Menu, RouterModule, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'Meu Pedido';
}
