import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao-page';
import { AgendamentoPage } from '../pages/agendamento/agendamento-page';
import { HttpClientModule } from '@angular/common/http';
import { RespostaSolicitacaoPage } from '../pages/resposta-solicitacao/resposta-solicitacao-page';
import { AdicionarProdutoPage } from '../pages/adicionar-produto/adicionar-produto-page';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SolicitacaoPage,
    AgendamentoPage,
    RespostaSolicitacaoPage,
    AdicionarProdutoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SolicitacaoPage,
    AgendamentoPage,
    RespostaSolicitacaoPage,
    AdicionarProdutoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
