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
  // respostasPesquisaLojaSelected: RespostaPesquisaLoja[];
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

        for (let respostaPesquisa of this.respostasPesquisaLoja) {

          if (String(new Date(respostaPesquisa.data_pesquisa).getTime()) != "NaN") {

            if((new Date(respostaPesquisa.data_pesquisa).getTime()) + ((1000 * 60) * 200) < new Date().getTime()) {
              respostaPesquisa.ver_botao = false;
            } else {
              respostaPesquisa.ver_botao = true;
            }
            respostaPesquisa.timer = (new Date(respostaPesquisa.data_pesquisa).getTime()) + ((1000 * 60) * 200);
          } else {
            respostaPesquisa.ver_botao = false;
          }

          respostaPesquisa.data_pesquisa = respostaPesquisa.data_pesquisa.substring(4, respostaPesquisa.data_pesquisa.length);
          respostaPesquisa.data_pesquisa = respostaPesquisa.data_pesquisa.substring(0, 21);

          if (respostaPesquisa.timer != undefined && respostaPesquisa.timer != NaN) {
            var setTimeOut = setInterval(function () {
              respostaPesquisa.timer = respostaPesquisa.timer - 1000;

              if(respostaPesquisa.timer + ((1000 * 60) * 10) < new Date().getTime()) {
                respostaPesquisa.ver_botao = false;
              } else {
                respostaPesquisa.ver_botao = true;
              }

              var timeinmilli = respostaPesquisa.timer;
              var seconds = parseInt(String((timeinmilli = timeinmilli / 1000) % 60));
              var minutes = parseInt(String((timeinmilli = timeinmilli / 60) % 60));

              var result = (minutes < 9 ? "0" + minutes : minutes) + ':' + (seconds < 9 ? "0" + seconds : seconds);

              respostaPesquisa.cronometro = String(result);

            }, 1000);

            setTimeOut;
          }
        }

      }, err => {
        console.log(err);
      });


  }

  public convertMS(ms) {

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
