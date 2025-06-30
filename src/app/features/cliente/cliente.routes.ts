import { Routes } from '@angular/router';
import { PageCliente } from './pages/page-cliente/page-cliente';
import { PageClienteForm } from './pages/page-cliente-form/page-cliente-form';

export const CLIENTE_ROUTES: Routes = [
  {
    path: '',
    component: PageCliente,
    title: 'Lista de Clientes'
  },
  {
    path: 'novo',
    component: PageClienteForm,
    title: 'Novo Cliente'
  },
  {
    path: 'editar',
    component: PageClienteForm,
    title: 'Editar Cliente'
  },
];