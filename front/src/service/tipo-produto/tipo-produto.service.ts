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
import { TipoProduto } from '../../model/tipo-produto';

@Injectable()
export class TipoProdutoProvider {

    constructor(public http: HttpClient) {}

    private headers =  new HttpHeaders().set('Content-Type', 'application/json');
   
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    getTiposProdutos(): Observable<TipoProduto[]> {
        return this.http.get("http://localhost:8080/api/tipo-produto")
          .map(res => res)
          .catch(this.handleErrorObservable);
    }
}
