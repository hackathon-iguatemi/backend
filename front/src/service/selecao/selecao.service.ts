import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Selecao } from '../../model/selecao';

@Injectable()
export class SelecaoProvider {

    constructor(public http: HttpClient) {}

    private headers =  new HttpHeaders().set('Content-Type', 'application/json');
   
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    addProduto(selecao:Selecao): Observable<Object> {
        const url = 'http://localhost:8080/api/selecao/';

        let body = new URLSearchParams();
        body.set('idProduto', selecao.idProduto);
        body.set('idPesquisa', selecao.idPesquisa);
        
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        return this.http.post(url, body.toString(), options).map(res => res)
        .catch(this.handleErrorObservable);
    }

}
