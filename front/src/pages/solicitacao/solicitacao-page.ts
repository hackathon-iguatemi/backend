import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RespostaPesquisaLojaProvider } from '../../service/loja/resposta-pesquisa-loja.service';
import { RespostaPesquisaLoja } from '../../model/resposta-pesquisa-loja';

@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao-page.html',
  providers: [RespostaPesquisaLojaProvider]
})
export class SolicitacaoPage implements OnInit {

  respostasPesquisaLoja: RespostaPesquisaLoja[];

  constructor(
    public navCtrl: NavController,
    public respostaPesquisaLojaProvider: RespostaPesquisaLojaProvider,
  ) { }

  public ngOnInit() {
    this.respostasPesquisaLoja = new Array<RespostaPesquisaLoja>();
    
    this.respostaPesquisaLojaProvider.getRespostaPesquisaByIdLojasObservable("1")
      .subscribe(res => {
        this.respostasPesquisaLoja = res;
      }, err => {
        console.log(err);
      })
  }

}
