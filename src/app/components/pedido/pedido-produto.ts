import { Produto } from "../produto/produto";

export interface PedidoProduto extends Produto{
    desconto: number
    quantidade: number
}
