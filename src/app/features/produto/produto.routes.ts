import { Routes } from '@angular/router';
import { PageProduto } from './pages/page-produto/page-produto';
import { PageProdutoForm } from './pages/page-produto-form/page-produto-form';

export const PRODUTO_ROUTES: Routes = [
  {
    path: '',
    component: PageProduto,
    title: 'Lista de Produtos'
  },
  {
    path: 'novo',
    component: PageProdutoForm,
    title: 'Novo Produto'
  },
  {
    path: 'editar',
    component: PageProdutoForm,
    title: 'Editar Produto'
  },
];