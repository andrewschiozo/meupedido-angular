import { Routes } from '@angular/router';
import { PagePedido } from './pages/page-pedido/page-pedido';


export const PEDIDO_ROUTES: Routes = [
  {
    path: '',
    component: PagePedido,
    title: 'Lista de Pedidos'
  },
  {
    path: 'novo',
    component: PagePedido,
    title: 'Novo Pedido'
  },
  {
    path: 'editar',
    component: PagePedido,
    title: 'Editar Pedido'
  },
];