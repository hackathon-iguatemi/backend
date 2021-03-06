webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__solicitacao_solicitacao_page__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agendamento_agendamento_page__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log(this.solicitacao);
        this.solicitacao = __WEBPACK_IMPORTED_MODULE_2__solicitacao_solicitacao_page__["a" /* SolicitacaoPage */];
        this.agendamento = __WEBPACK_IMPORTED_MODULE_3__agendamento_agendamento_page__["a" /* AgendamentoPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/home/home.html"*/'\n<ion-tabs>\n  <ion-tab [root]="solicitacao" tabTitle="LEADS"></ion-tab>\n  <ion-tab [root]="agendamento" tabTitle="AGENDAMENTO"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_loja_resposta_pesquisa_loja_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resposta_solicitacao_resposta_solicitacao_page__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SolicitacaoPage = /** @class */ (function () {
    function SolicitacaoPage(navCtrl, app, respostaPesquisaLojaProvider) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.respostaPesquisaLojaProvider = respostaPesquisaLojaProvider;
    }
    SolicitacaoPage.prototype.modifyLoja = function () {
        var _this = this;
        this.respostasPesquisaLoja = new Array();
        this.respostaPesquisaLojaProvider.getRespostaPesquisaByIdLojasObservable(this.idLoja)
            .subscribe(function (res) {
            _this.respostasPesquisaLoja = res;
            var _loop_1 = function (respostaPesquisa) {
                if (String(new Date(respostaPesquisa.data_pesquisa).getTime()) != "NaN") {
                    if ((new Date(respostaPesquisa.data_pesquisa).getTime()) + ((1000 * 60) * 200) < new Date().getTime()) {
                        respostaPesquisa.ver_botao = false;
                    }
                    else {
                        respostaPesquisa.ver_botao = true;
                    }
                    respostaPesquisa.timer = (new Date(respostaPesquisa.data_pesquisa).getTime()) + ((1000 * 60) * 200);
                }
                else {
                    respostaPesquisa.ver_botao = false;
                }
                respostaPesquisa.data_pesquisa = respostaPesquisa.data_pesquisa.substring(4, respostaPesquisa.data_pesquisa.length);
                respostaPesquisa.data_pesquisa = respostaPesquisa.data_pesquisa.substring(0, 21);
                if (respostaPesquisa.timer != undefined && respostaPesquisa.timer != NaN) {
                    setTimeOut = setInterval(function () {
                        respostaPesquisa.timer = respostaPesquisa.timer - 1000;
                        if (respostaPesquisa.timer + ((1000 * 60) * 10) < new Date().getTime()) {
                            respostaPesquisa.ver_botao = false;
                        }
                        else {
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
            };
            var setTimeOut;
            for (var _i = 0, _a = _this.respostasPesquisaLoja; _i < _a.length; _i++) {
                var respostaPesquisa = _a[_i];
                _loop_1(respostaPesquisa);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SolicitacaoPage.prototype.convertMS = function (ms) {
    };
    SolicitacaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.respostasPesquisaLoja = new Array();
        this.respostaPesquisaLojaProvider.getAllLojasObservable()
            .subscribe(function (res) {
            _this.lojas = res;
        }, function (err) {
            console.log(err);
        });
    };
    SolicitacaoPage.prototype.aceitar = function (resposta) {
        this.openPage(resposta);
    };
    SolicitacaoPage.prototype.openPage = function (resposta) {
        resposta.idLoja = this.idLoja;
        var params = {
            "resposta": resposta
        };
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__resposta_solicitacao_resposta_solicitacao_page__["a" /* RespostaSolicitacaoPage */], params);
    };
    SolicitacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-solicitacao',template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/solicitacao/solicitacao-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Leads\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-select col-12 [(ngModel)]="idLoja" placeholder="Loja" class="zero-margin" (ionChange)="modifyLoja()" class="margin-select">\n        <ng-container *ngFor="let loja of lojas">\n            <ion-option value="{{loja.idLoja}}">{{loja.nome}}</ion-option>\n        </ng-container>\n    </ion-select>\n    <ion-list>\n        <ion-item *ngFor="let resposta of respostasPesquisaLoja" class="item-list">\n            <ion-grid class="title-status">\n                <ion-row>\n                    <ion-col col-12 text-center>\n                        <p class="status">{{resposta.ver_botao == false ? \'PERDIDO!\' : \'PENDENTE!\'}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-6>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-4 class="img-resposta-icon">\n                                    <img height="40" width="50" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e-0MFbXTwq4C_tb8NoWvmiTOyigeoBMDqd7uXhwcAjXDViN-"\n                                    />\n                                </ion-col>\n                                <ion-col col-8>\n                                    <ion-grid class="info-resposta">\n                                        <ion-row>\n                                            <ion-col col-12>\n                                                <p>\n                                                    <b>{{resposta.nome}}</b>\n                                                </p>\n                                            </ion-col>\n                                        </ion-row>\n                                        <ion-row>\n                                            <ion-col col-12>\n                                                <p>\n                                                    {{resposta.data_pesquisa}}</p>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-col>\n\n                            </ion-row>\n                        </ion-grid>\n\n                    </ion-col>\n                    <ion-col col-6 text-right>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-12 text-center>\n                                    <p class="cronometro" *ngIf="resposta.ver_botao">\n                                        <b> {{resposta.cronometro}}</b>\n                                    </p>\n                                </ion-col>\n                                <ion-col col-12>\n                                    <!-- *ngIf="resposta.ver_botao"  -->\n                                    <button ion-button class="color-button" (click)="aceitar(resposta);">Ofertar</button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/solicitacao/solicitacao-page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_loja_resposta_pesquisa_loja_service__["a" /* RespostaPesquisaLojaProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__service_loja_resposta_pesquisa_loja_service__["a" /* RespostaPesquisaLojaProvider */]])
    ], SolicitacaoPage);
    return SolicitacaoPage;
}());

//# sourceMappingURL=solicitacao-page.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespostaSolicitacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_resposta_pesquisa_loja__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_produto_produto_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adicionar_produto_adicionar_produto_page__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_selecao_selecao_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_selecao__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RespostaSolicitacaoPage = /** @class */ (function () {
    function RespostaSolicitacaoPage(navParams, produtoProvider, navCtrl, selecaoProvider, modalCtrl) {
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.navCtrl = navCtrl;
        this.selecaoProvider = selecaoProvider;
        this.modalCtrl = modalCtrl;
        this.resposta = new __WEBPACK_IMPORTED_MODULE_2__model_resposta_pesquisa_loja__["a" /* RespostaPesquisaLoja */]();
        this.resposta = this.navParams.get("resposta");
        this.resposta.resultado_vr = {
            "influencer_name": "",
            "items": [
                {
                    "imageID": "",
                    "ml_analysis": [
                        {
                            "article_name": "blazer",
                            "bounding_box": {
                                "x0": 442,
                                "x1": 913,
                                "y0": 260,
                                "y1": 694
                            },
                            "confidence": 0.5159529447555542
                        }
                    ]
                }
            ]
        };
    }
    RespostaSolicitacaoPage.prototype.atualizar = function () {
        this.getProdutos();
    };
    RespostaSolicitacaoPage.prototype.getProdutos = function () {
        var _this = this;
        this.produtos = new Array();
        this.produtoProvider.getProdutoByIdLoja(this.resposta.idLoja)
            .subscribe(function (res) {
            _this.produtos = res;
        }, function (err) {
            console.log(err);
        });
    };
    RespostaSolicitacaoPage.prototype.ngOnInit = function () {
        this.getProdutos();
    };
    RespostaSolicitacaoPage.prototype.adicionar = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__adicionar_produto_adicionar_produto_page__["a" /* AdicionarProdutoPage */], { idLoja: this.resposta.idLoja });
        profileModal.present();
    };
    RespostaSolicitacaoPage.prototype.selecionar = function (idProduto) {
        this.idProduto = idProduto;
        console.log(this.idProduto);
    };
    RespostaSolicitacaoPage.prototype.responder = function () {
        var selecao = new __WEBPACK_IMPORTED_MODULE_6__model_selecao__["a" /* Selecao */]();
        selecao.idPesquisa = this.resposta.idPesquisa;
        selecao.idProduto = this.idProduto;
        this.selecaoProvider.addProduto(selecao)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    RespostaSolicitacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resposta-solicitacao',template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/resposta-solicitacao/resposta-solicitacao-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Resposta Solicitacao\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h4>Cliente\n          <b>{{resposta.nome}}</b>\n        </h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h4>Result</h4>\n\n        <ion-list>\n          <ion-row>\n            <ion-col col-4 *ngFor="let resp of resposta.url" class="item-list">\n              <img height="100" width="100" [src]="resp" />\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  {{resposta.resultado_vr.influencer_name}} {{resposta.resultado_vr.influencer_name}} {{resposta.resultado_vr.items[0].imageID\n  }} {{resposta.resultado_vr.items[0].ml_analysis[0].article_name}} {{resposta.resultado_vr.items[0].ml_analysis[0].bounding_box.x0}}\n  {{resposta.resultado_vr.items[0].ml_analysis[0].bounding_box.x1}} {{resposta.resultado_vr.items[0].ml_analysis[0].bounding_box.x0}}\n  {{resposta.resultado_vr.items[0].ml_analysis[0].bounding_box.x1}} {{resposta.resultado_vr.items[0].ml_analysis[0].confidence}}\n  AQUI TEM QUE TER AS INFOS DO USUARIO E DO PRODUTO POR EXEMPLO RESULTADO VISUAL RECOGNIZE\n\n  <ion-list>\n    <button ion-item *ngFor="let produto of produtos">\n      <p text-left>\n        <b>{{produto.nome}}</b>\n      </p>\n      <p text-left>\n        <b>{{produto.preco}}</b>\n      </p>\n      <p text-left>\n        <b>{{produto.descricao}}</b>\n      </p>\n      <p text-left>\n        <b>{{produto.descricaoProduto}}</b>\n      </p>\n      <p *ngIf="produto.idProduto == idProduto">\n        <b>SELECIONADO!!!!</b>\n      </p>\n      <button *ngIf="produto.idProduto != idProduto" ion-button item-end (click)="selecionar(produto.idProduto);">SELECIONAR</button>\n    </button>\n  </ion-list>\n\n\n\n  <button ion-button item-end (click)="atualizar();">ATUALIZAR</button>\n  <button ion-button item-end (click)="adicionar();">ADICIONAR</button>\n  <button ion-button item-end (click)="responder();">RESPONDER</button>\n</ion-content>'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/resposta-solicitacao/resposta-solicitacao-page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_produto_produto_service__["a" /* ProdutoProvider */], __WEBPACK_IMPORTED_MODULE_5__service_selecao_selecao_service__["a" /* SelecaoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__service_produto_produto_service__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__service_selecao_selecao_service__["a" /* SelecaoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RespostaSolicitacaoPage);
    return RespostaSolicitacaoPage;
}());

//# sourceMappingURL=resposta-solicitacao-page.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProdutoProvider = /** @class */ (function () {
    function ProdutoProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    ProdutoProvider.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    ProdutoProvider.prototype.getProdutoByIdLoja = function (idLoja) {
        return this.http.get("https://hackathon-iguatemi.mybluemix.net/api/produto/by-id-loja?idLoja=" + idLoja)
            .map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    ProdutoProvider.prototype.addImage = function (minhaFoto) {
        // const url = 'http://localhost:8080/api/produto/';
        var url = 'https://hacka-jk.herokuapp.com/upload_product';
        var body = new URLSearchParams();
        body.set('base64', minhaFoto);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(url, body.toString(), options).map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    ProdutoProvider.prototype.addProduto = function (produto) {
        // const url = 'http://localhost:8080/api/produto/';
        var url = 'https://hackathon-iguatemi.mybluemix.net/api/produto/';
        var body = new URLSearchParams();
        body.set('idLoja', produto.idLoja);
        body.set('idTipoProduto', produto.idTipoProduto);
        body.set('preco', produto.preco);
        body.set('descricao', produto.descricao);
        body.set('tamanho', produto.tamanho);
        body.set('url', produto.url);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(url, body.toString(), options).map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}());

//# sourceMappingURL=produto.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_produto__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_tipo_produto_tipo_produto_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_produto_produto_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdicionarProdutoPage = /** @class */ (function () {
    function AdicionarProdutoPage(navCtrl, tipoProdutoProvider, produtoProvider, camera, http, params) {
        this.navCtrl = navCtrl;
        this.tipoProdutoProvider = tipoProdutoProvider;
        this.produtoProvider = produtoProvider;
        this.camera = camera;
        this.http = http;
        this.idLoja = params.get('idLoja');
    }
    AdicionarProdutoPage.prototype.getBase64ImageFromURL = function (url) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].create(function (observer) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                img.onload = function () {
                    observer.next(_this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = function (err) {
                    observer.error(err);
                };
            }
            else {
                observer.next(_this.getBase64Image(img));
                observer.complete();
            }
        });
    };
    AdicionarProdutoPage.prototype.getBase64Image = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    AdicionarProdutoPage.prototype.tirarFoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.minhaFoto = 'data:image/jpeg;base64,' + imageData;
            _this.addImage(_this.minhaFoto);
        }, function (err) {
            // Handle error
        });
    };
    AdicionarProdutoPage.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    AdicionarProdutoPage.prototype.addImage = function (minhaFoto) {
        this.produtoProvider.addImage(minhaFoto)
            .subscribe(function (res) {
            var url = 'https://hacka-jk.herokuapp.com/upload_product';
            //this.produto.url = url + res;
        }, function (err) {
            console.log(err);
        });
    };
    AdicionarProdutoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.produto = new __WEBPACK_IMPORTED_MODULE_2__model_produto__["a" /* Produto */]();
        this.produto.descricao = "Regata Brasa Mora";
        // this.produto.idTipoProduto = "1";
        this.produto.preco = "50,00";
        this.produto.tamanho = "G";
        this.produto.url = "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/regata-nike-crossover-sleeveless-19e57e7b801fe269793d7c3cde77bc83.jpg";
        this.tipoProdutoProvider.getTiposProdutos()
            .subscribe(function (res) {
            _this.tiposProdutos = res;
        }, function (err) {
            console.log(err);
        });
    };
    AdicionarProdutoPage.prototype.adicionar = function () {
        var _this = this;
        this.produto.idLoja = this.idLoja;
        this.produtoProvider.addProduto(this.produto)
            .subscribe(function (res) {
            console.log(res);
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    AdicionarProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar-produto-page',template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/adicionar-produto/adicionar-produto-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Adicionar Produto\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- idProduto: string;\n    idLoja: string;\n    idTipoProduto: string;\n    preco: string;\n    descricao: string;\n    descricaoProduto:string;\n    tamanho: string;\n    url: string; -->\n\n    <ion-item>\n        <ion-label color="primary" stacked>Descricao</ion-label>\n        <ion-input placeholder="Descricao" id="descricao" type="text" name="descricao" class="form-control" [(ngModel)]="produto.descricao"></ion-input>\n    </ion-item>\n\n    <ion-select col-12 [(ngModel)]="produto.idTipoProduto" placeholder="Tipo Produto" class="zero-margin">\n        <ng-container *ngFor="let tipoProduto of tiposProdutos">\n            <ion-option value="{{tipoProduto.idTipoProduto}}">{{tipoProduto.descricao}}</ion-option>\n        </ng-container>\n    </ion-select>\n\n    <ion-item>\n        <ion-label color="primary" stacked>Preco</ion-label>\n        <ion-input placeholder="Preco" id="preco" type="text" name="preco" class="form-control" [(ngModel)]="produto.preco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary" stacked>Tamanho</ion-label>\n        <ion-input placeholder="Tamanho" id="tamanho" type="text" name="tamanho" class="form-control" [(ngModel)]="produto.tamanho"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary" stacked>URL</ion-label>\n        <ion-input placeholder="URL" id="url" type="text" name="url" class="form-control" [(ngModel)]="produto.url"></ion-input>\n    </ion-item>\n\n    <button ion-button (click)="adicionar();">ADICIONAR</button>\n    <button ion-button item-end (click)="tirarFoto();">TIRAR FOTO</button>\n</ion-content>'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/adicionar-produto/adicionar-produto-page.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_tipo_produto_tipo_produto_service__["a" /* TipoProdutoProvider */], __WEBPACK_IMPORTED_MODULE_4__service_produto_produto_service__["a" /* ProdutoProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_tipo_produto_tipo_produto_service__["a" /* TipoProdutoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_tipo_produto_tipo_produto_service__["a" /* TipoProdutoProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_produto_produto_service__["a" /* ProdutoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_produto_produto_service__["a" /* ProdutoProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _f || Object])
    ], AdicionarProdutoPage);
    return AdicionarProdutoPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=adicionar-produto-page.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgendamentoPage = /** @class */ (function () {
    function AgendamentoPage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log(this.navCtrl.id);
    }
    AgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agendamento',template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/agendamento/agendamento-page.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title text-center>\n        Agendamento\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n  </ion-content>'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/pages/agendamento/agendamento-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AgendamentoPage);
    return AgendamentoPage;
}());

//# sourceMappingURL=agendamento-page.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao_page__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_agendamento_agendamento_page__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resposta_solicitacao_resposta_solicitacao_page__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_adicionar_produto_adicionar_produto_page__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao_page__["a" /* SolicitacaoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agendamento_agendamento_page__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resposta_solicitacao_resposta_solicitacao_page__["a" /* RespostaSolicitacaoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_adicionar_produto_adicionar_produto_page__["a" /* AdicionarProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__node_modules_angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_solicitacao_solicitacao_page__["a" /* SolicitacaoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_agendamento_agendamento_page__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resposta_solicitacao_resposta_solicitacao_page__["a" /* RespostaSolicitacaoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_adicionar_produto_adicionar_produto_page__["a" /* AdicionarProdutoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_base64__["a" /* Base64 */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/augusto/Workspace/hackathons/backend/backend/front/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/augusto/Workspace/hackathons/backend/backend/front/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespostaPesquisaLojaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RespostaPesquisaLojaProvider = /** @class */ (function () {
    function RespostaPesquisaLojaProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    RespostaPesquisaLojaProvider.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    RespostaPesquisaLojaProvider.prototype.getAllLojasObservable = function () {
        // return this.http.get("http://localhost:8080/api/loja")
        return this.http.get("https://hackathon-iguatemi.mybluemix.net/api/loja")
            .map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    RespostaPesquisaLojaProvider.prototype.getRespostaPesquisaByIdLojasObservable = function (idLoja) {
        // return this.http.get("http://localhost:8080/api/resposta-pesquisa-loja/by-id?idLoja=" + idLoja)
        return this.http.get("https://hackathon-iguatemi.mybluemix.net/api/resposta-pesquisa-loja/by-id?idLoja=" + idLoja)
            .map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    RespostaPesquisaLojaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], RespostaPesquisaLojaProvider);
    return RespostaPesquisaLojaProvider;
}());

//# sourceMappingURL=resposta-pesquisa-loja.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespostaPesquisaLoja; });
var RespostaPesquisaLoja = /** @class */ (function () {
    function RespostaPesquisaLoja() {
    }
    return RespostaPesquisaLoja;
}());

//# sourceMappingURL=resposta-pesquisa-loja.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TipoProdutoProvider = /** @class */ (function () {
    function TipoProdutoProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    TipoProdutoProvider.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    TipoProdutoProvider.prototype.getTiposProdutos = function () {
        return this.http.get("https://hackathon-iguatemi.mybluemix.net/api/tipo-produto")
            .map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    TipoProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], TipoProdutoProvider);
    return TipoProdutoProvider;
}());

//# sourceMappingURL=tipo-produto.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelecaoProvider = /** @class */ (function () {
    function SelecaoProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    SelecaoProvider.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    SelecaoProvider.prototype.addProduto = function (selecao) {
        var url = 'https://hackathon-iguatemi.mybluemix.net/api/selecao/';
        var body = new URLSearchParams();
        body.set('idProduto', selecao.idProduto);
        body.set('idPesquisa', selecao.idPesquisa);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post(url, body.toString(), options).map(function (res) { return res; })
            .catch(this.handleErrorObservable);
    };
    SelecaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], SelecaoProvider);
    return SelecaoProvider;
}());

//# sourceMappingURL=selecao.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selecao; });
var Selecao = /** @class */ (function () {
    function Selecao() {
    }
    return Selecao;
}());

//# sourceMappingURL=selecao.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map