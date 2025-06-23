import { Routes } from '@angular/router';
import { ViewHome } from './components/views/view-home/view-home';
import { ViewPedido } from './components/views/view-pedido/view-pedido';
import { ViewCliente } from './components/views/view-cliente/view-cliente';
import { ViewProduto } from './components/views/view-produto/view-produto';
import { ViewClienteForm } from './components/views/view-cliente-form/view-cliente-form';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ViewHome },
    { path: 'pedido', component: ViewPedido },
    { path: 'cliente', component: ViewCliente },
    { path: 'cliente/novo', component: ViewClienteForm },
    { path: 'cliente/editar', component: ViewClienteForm },
    { path: 'produto', component: ViewProduto },
];
