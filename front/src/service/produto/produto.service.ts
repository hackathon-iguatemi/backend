import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../../model/produto';

@Injectable()
export class ProdutoProvider {

    constructor(public http: HttpClient) {}

    private headers =  new HttpHeaders().set('Content-Type', 'application/json');
   
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    getProdutoByIdLoja(idLoja:string): Observable<Produto[]> {
        return this.http.get("http://localhost:8080/api/produto/by-id-loja?idLoja=" + idLoja)
          .map(res => res)
          .catch(this.handleErrorObservable);
    }

    addProduto(produto:Produto): Observable<Object> {
        const url = 'http://localhost:8080/api/produto/';

        let body = new URLSearchParams();
        body.set('idLoja', produto.idLoja);
        body.set('idTipoProduto', produto.idTipoProduto);
        body.set('preco', produto.preco);
        body.set('descricao', produto.descricao);
        body.set('tamanho', produto.tamanho);
        body.set('url', produto.url);
        
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        return this.http.post(url, body.toString(), options).map(res => res)
        .catch(this.handleErrorObservable);
    }

}
