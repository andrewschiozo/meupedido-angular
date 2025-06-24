import { Cliente } from "../cliente/cliente";
import { Produto } from "../produto/produto";

export interface Pedido {
    id: number;
    clienteId: number;
    cliente: Cliente;
    produtos: Produto[];
    valorTotal: number;
}
