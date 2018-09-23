import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RespostaPesquisaLoja } from '../../model/resposta-pesquisa-loja';
import { ProdutoProvider } from '../../service/produto/produto.service';
import { Produto } from '../../model/produto';
import { ModalController } from 'ionic-angular';
import { AdicionarProdutoPage } from '../adicionar-produto/adicionar-produto-page';
import { SelecaoProvider } from '../../service/selecao/selecao.service';
import { Selecao } from '../../model/selecao';

@Component({
  selector: 'page-resposta-solicitacao',
  templateUrl: 'resposta-solicitacao-page.html',
  providers: [ProdutoProvider, SelecaoProvider]
})
export class RespostaSolicitacaoPage implements OnInit{

  resposta: RespostaPesquisaLoja;
  produtos:Produto[];
  idProduto: string;

  constructor(
    private navParams: NavParams, 
    private produtoProvider: ProdutoProvider,
    public navCtrl: NavController,
    public selecaoProvider: SelecaoProvider,
    public modalCtrl: ModalController) {
    console.log(this.navCtrl.id);

    this.resposta = this.navParams.get("resposta");

    console.log(this.resposta);
  }

  public atualizar() {
    this.getProdutos();
  }

  public getProdutos() {
    this.produtos = new Array<Produto>();

    this.produtoProvider.getProdutoByIdLoja(this.resposta.idLoja)
    .subscribe(res => {
      this.produtos = res;
    }, err=> {
      console.log(err);
    }); 
  }

  public ngOnInit() {
    this.getProdutos();
  }

  public adicionar() {
    let profileModal = this.modalCtrl.create(AdicionarProdutoPage, { idLoja: this.resposta.idLoja });
    profileModal.present();
  }

  public selecionar(idProduto:string) {
    this.idProduto = idProduto;
    console.log(this.idProduto);
  }

  public responder() {
    let selecao = new Selecao();
    selecao.idPesquisa = this.resposta.idPesquisa;
    selecao.idProduto = this.idProduto;

    this.selecaoProvider.addProduto(selecao)
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  

  
}
