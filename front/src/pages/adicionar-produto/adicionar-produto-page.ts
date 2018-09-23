import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';
import { TipoProdutoProvider } from '../../service/tipo-produto/tipo-produto.service';
import { TipoProduto } from '../../model/tipo-produto';
import { ProdutoProvider } from '../../service/produto/produto.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


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
    base64Image: string;
    converti: string;
    entreiAdd: string;
    deiPost: string;

    constructor(
        public navCtrl: NavController,
        public tipoProdutoProvider: TipoProdutoProvider,
        public produtoProvider: ProdutoProvider,
        private camera: Camera,
        private http: HttpClient,
        params: NavParams) {

        this.idLoja = params.get('idLoja')
    }


    getBase64ImageFromURL(url: string) {
        return Observable.create((observer: Observer<string>) => {
            let img = new Image();
            img.crossOrigin = 'Anonymous'
            img.src = url;
            if (!img.complete) {
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = (err) => {
                    observer.error(err);
                };
            } else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }

    getBase64Image(img: HTMLImageElement) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    tirarFoto() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):

            this.minhaFoto = 'data:image/jpeg;base64,' + imageData;
            this.converti = 'CONVERTIDO';
            this.addImage(this.minhaFoto);
        }, (err) => {
            // Handle error
        });
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    addImage(minhaFoto: any) {
        this.entreiAdd = 'ENTREI NO ADD';
        const url = 'https://hacka-jk.herokuapp.com/upload_product';
        let body = new URLSearchParams();
        body.set('base64', minhaFoto);

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        this.http.post(url, body.toString(), options)
            .subscribe(res => {
                this.produto.url = url + String(res);
                this.deiPost = 'DEI O POST';
            }, err => {
                this.deiPost = 'DEI O POST' + JSON.stringify(err);
            })
    }

    public ngOnInit() {
        this.produto = new Produto();

        // this.produto.descricao = "Regata Brasa Mora";
        // this.produto.idTipoProduto = "1";
        this.produto.preco = "50,00";
        // this.produto.tamanho = "G";
        // this.produto.url = "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/regata-nike-crossover-sleeveless-19e57e7b801fe269793d7c3cde77bc83.jpg";

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
