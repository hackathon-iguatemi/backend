import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { TipoProdutoProvider } from '../../service/tipo-produto/tipo-produto.service';
import { TipoProduto } from '../../model/tipo-produto';
import { ProdutoProvider } from '../../service/produto/produto.service';

@Component({
    selector: 'page-adicionar-produto-page',
    templateUrl: 'adicionar-produto-page.html',
    providers: [TipoProdutoProvider, ProdutoProvider]
})
export class AdicionarProdutoPage implements OnInit {

    produto: Produto;
    tiposProdutos: TipoProduto[];
    idLoja: string;
    constructor(
        public navCtrl: NavController,
        public tipoProdutoProvider: TipoProdutoProvider,
        public produtoProvider:ProdutoProvider,
        params: NavParams) {
        
        this.idLoja = params.get('idLoja')
    }

    public ngOnInit() {
        this.produto = new Produto();

        this.produto.descricao = "Regata Brasa Mora";
        this.produto.idTipoProduto = "1";
        this.produto.preco = "50,00";
        this.produto.tamanho = "G";
        this.produto.url = "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/regata-nike-crossover-sleeveless-19e57e7b801fe269793d7c3cde77bc83.jpg";

        this.tipoProdutoProvider.getTiposProdutos()
            .subscribe(res => {
                this.tiposProdutos = res;
            }, err => {
                console.log(err);
            });
    }

    public adicionar() {
        this.produto.idLoja = this.idLoja;

        this.produtoProvider.addProduto(this.produto)
        .subscribe(res => {
            console.log(res);
            this.navCtrl.pop();
        }, err => {
            console.log(err);
        })

    }

}
