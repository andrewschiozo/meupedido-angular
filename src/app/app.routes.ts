import { Routes } from '@angular/router';
import { PageHome } from './features/home/pages/page-home/page-home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PageHome, title: 'Home' },
    { path: 'pedido', loadChildren: () => import('./features/pedido/pedido.routes').then(m => m.PEDIDO_ROUTES) },
    { path: 'cliente', loadChildren: () => import('./features/cliente/cliente.routes').then(m => m.CLIENTE_ROUTES) },
    { path: 'produto', loadChildren: () => import('./features/produto/produto.routes').then(m => m.PRODUTO_ROUTES) },
    { path: '**', redirectTo: 'home' },
];