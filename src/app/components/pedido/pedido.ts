import { Cliente } from "../cliente/cliente";
import { PedidoProduto } from "./pedido-produto";

export interface Pedido {
    id: number;
    clienteId: number;
    cliente: Cliente;
    produtos: PedidoProduto[];
    valorTotal: number;
}
