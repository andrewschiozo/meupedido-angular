import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.interface';
import { map, Observable } from 'rxjs';
import { ProdutoApi } from '../models/produto-api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProduto {

  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ProdutoApi[]>(`${this.apiUrl}?_format=json`).pipe(
      map(response => response.map(produtoApi => ({
        id: produtoApi.id,
        nome: produtoApi.nome,
        preco: parseFloat(produtoApi.preco),
        descricao: produtoApi.descricao,
        imagem: '',
        qtdEstoque: produtoApi.estoque,
        categoria: ''
      } as Produto)))
    );
  }

  create(produto: Produto): Observable<Produto> {
    const produtoApi: ProdutoApi = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco.toString(),
      descricao: produto.descricao,
      estoque: produto.qtdEstoque
    }

    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<ProdutoApi>(this.apiUrl, produtoApi, { headers }).pipe(
      map(produtoApi => ({
        id: produtoApi.id,
        nome: produtoApi.nome,
        preco: parseFloat(produtoApi.preco),
        descricao: produtoApi.descricao,
        imagem: '',
        qtdEstoque: produtoApi.estoque,
        categoria: ''
      } as Produto))
    )
  }  
}
