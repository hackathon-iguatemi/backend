import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento-page.html'
})
export class AgendamentoPage {

  constructor(public navCtrl: NavController) {
    console.log(this.navCtrl.id);
  }

  
}
