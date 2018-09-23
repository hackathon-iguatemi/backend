import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { TipoProdutoProvider } from '../../service/tipo-produto/tipo-produto.service';
import { TipoProduto } from '../../model/tipo-produto';
import { ProdutoProvider } from '../../service/produto/produto.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    selector: 'page-adicionar-produto-page',
    templateUrl: 'adicionar-produto-page.html',
    providers: [TipoProdutoProvider, ProdutoProvider]
})
export class AdicionarProdutoPage implements OnInit {

    produto: Produto;
    tiposProdutos: TipoProduto[];
    idLoja: string;
    minhaFoto: any;
    constructor(
        public navCtrl: NavController,
        public tipoProdutoProvider: TipoProdutoProvider,
        public produtoProvider: ProdutoProvider,
        private camera: Camera,
        params: NavParams) {

        this.idLoja = params.get('idLoja')
    }

    tirarFoto() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.minhaFoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
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
