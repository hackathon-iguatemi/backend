import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RespostaPesquisaLojaProvider } from '../../service/loja/resposta-pesquisa-loja.service';
import { RespostaPesquisaLoja } from '../../model/resposta-pesquisa-loja';
import { RespostaSolicitacaoPage } from '../resposta-solicitacao/resposta-solicitacao-page';
import { Loja } from '../../model/loja';

@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao-page.html',
  providers: [RespostaPesquisaLojaProvider]
})
export class SolicitacaoPage implements OnInit {

  respostasPesquisaLoja: RespostaPesquisaLoja[];
  lojas: Loja[];
  idLoja: string;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public respostaPesquisaLojaProvider: RespostaPesquisaLojaProvider,
  ) { }

  public modifyLoja() {
    this.respostasPesquisaLoja = new Array<RespostaPesquisaLoja>();

    this.respostaPesquisaLojaProvider.getRespostaPesquisaByIdLojasObservable(this.idLoja)
      .subscribe(res => {
        this.respostasPesquisaLoja = res;
      }, err => {
        console.log(err);
      });


  }

  public ngOnInit() {
    this.respostasPesquisaLoja = new Array<RespostaPesquisaLoja>();

    this.respostaPesquisaLojaProvider.getAllLojasObservable()
      .subscribe(res => {
        this.lojas = res;
      }, err => {
        console.log(err);
      });
  }

  public aceitar(resposta: RespostaPesquisaLoja) {
    this.openPage(resposta);
  }

  openPage(resposta: RespostaPesquisaLoja) {
    resposta.idLoja = this.idLoja;

    let params = {
      "resposta": resposta
    };
    this.app.getRootNav().push(RespostaSolicitacaoPage, params);
  }

}
