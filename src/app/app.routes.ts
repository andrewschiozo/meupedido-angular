import { Routes } from '@angular/router';
import { PageHome } from './components/pages/page-home/page-home';
import { PagePedido } from './components/pages/pedido/page-pedido/page-pedido';
import { PageCliente } from './components/pages/cliente/page-cliente/page-cliente';
import { PageClienteForm } from './components/pages/cliente/page-cliente-form/page-cliente-form';
import { PageProduto } from './components/pages/produto/page-produto/page-produto';
import { PageProdutoForm } from './components/pages/produto/page-produto-form/page-produto-form';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PageHome },
    { path: 'pedido', component: PagePedido },
    { path: 'cliente', component: PageCliente },
    { path: 'cliente/novo', component: PageClienteForm },
    { path: 'cliente/editar', component: PageClienteForm },
    { path: 'produto', component: PageProduto },
    { path: 'produto/novo', component: PageProdutoForm },
    { path: 'produto/editar', component: PageProdutoForm },
];
