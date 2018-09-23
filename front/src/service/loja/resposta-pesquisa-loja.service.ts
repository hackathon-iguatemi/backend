import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RespostaPesquisaLoja } from '../../model/resposta-pesquisa-loja';
import { Loja } from '../../model/loja';

@Injectable()
export class RespostaPesquisaLojaProvider {

    constructor(public http: HttpClient) {}

    private headers =  new HttpHeaders().set('Content-Type', 'application/json');
   
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    getAllLojasObservable(): Observable<Loja[]> {
        return this.http.get("http://localhost:8080/api/loja")
          .map(res => res)
          .catch(this.handleErrorObservable);
    }

    getRespostaPesquisaByIdLojasObservable(idLoja:string): Observable<RespostaPesquisaLoja[]> {
        return this.http.get("http://localhost:8080/api/resposta-pesquisa-loja/by-id?idLoja=" + idLoja)
          .map(res => res)
          .catch(this.handleErrorObservable);
    }
}
