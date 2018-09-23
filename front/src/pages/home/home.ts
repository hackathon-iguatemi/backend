import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitacaoPage } from '../solicitacao/solicitacao-page';
import { AgendamentoPage } from '../agendamento/agendamento-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  solicitacao: any;
  agendamento: any;

  constructor(public navCtrl: NavController) {
    console.log(this.solicitacao);
    this.solicitacao = SolicitacaoPage;
    this.agendamento = AgendamentoPage;
  }

}
