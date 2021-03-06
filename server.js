var express = require("express"), app = express();
var port = process.env.PORT || 8080;
var rp = require('request-promise').defaults({simple: false})

app.use(express.static(__dirname + '/front/www/'));

var bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// CONNECTION
var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "us-cdbr-iron-east-01.cleardb.net",
//   user: "bc869ed555ea5a",
//   password: "28e39428",
//   database: 'heroku_943c7866b0abe52',
//   // port: '',
// });
// END CONNECTION

var pool = mysql.createPool({
  connectionLimit: 10, // default = 10
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "bc869ed555ea5a",
  password: "28e39428",
  database: 'heroku_943c7866b0abe52',
});

app.post("/api/cliente", function (request, response) {
  var cpf = request.body.cpf;
  var nome = request.body.nome;
  var data_nasc = request.body.data_nasc;
  var sexo = request.body.sexo;
  var tamanho_roupa = request.body.tamanho_roupa;

  if (cpf != undefined && nome != undefined && data_nasc != undefined && sexo != undefined && tamanho_roupa != undefined) {

    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO Cliente (cpf, nome, data_nasc, sexo, tamanho_roupa) VALUES ("' + cpf + '", "' + nome + '", "' + data_nasc + '", "' + sexo + '", "' + tamanho_roupa + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        // response.send(JSON.stringify(result));
        // response.end();

        let requestOptions = {
          resolveWithFullResponse: true,
          method: 'POST',
          uri: 'http://api.hack.platformbuilders.io/iguatemi/v1/clientes',
          body: {
            "bairro": "Vila Olimpia",
            "cep": "04543-011",
            "cidade": "SÃO PAULO",
            "complemento": "",
            "dataModificacao": "2018-06-26T12:06:00.000Z",
            "dataNascimento": data_nasc,
            "ddd": "11",
            "email": "hackathon@iguatemi.com",
            "endereco": "",
            "estado": "SÃO PAULO",
            "estadoCivil": "CASADO(A)",
            "faixaEtaria": "51 A 60 ANOS",
            "genero": sexo,
            "idade": "57",
            "nome": nome,
            "ocupacao": "JORNALISTA",
            "possuiCpfCadastrado": true,
            "possuiEmailCadastrado": true,
            "possuiEnderecoCadastrado": true,
            "telefone": "0000-0000"
          },
          json: true,
          headers: {
            'api-key': 'ef0ea7e8b7bd4087a6ab4d76f0d37b06'
          }
        }

        rp(requestOptions).then((rpResp) => {

          let body = rpResp.body

          console.log(body)
          console.log('+++++++++++++++++++++++==')

          response.send(JSON.stringify(result));
          response.end();

        })


      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/cliente", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Cliente";
    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.send(JSON.stringify(result));
      response.end();

    });
  });
});

app.post("/api/loja", function (request, response) {
  var nome = request.body.nome;
  var segmento = request.body.segmento;
  if (nome != undefined && segmento != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;

      var sql = 'INSERT INTO Loja (nome, segmento) VALUES ("' + nome + '", "' + segmento + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/loja", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Loja";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/tipo-produto", function (request, response) {
  console.log(request.body);
  var descricao = request.body.descricao;

  if (descricao != undefined) {

    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO TipoProduto (descricao) VALUES ("' + descricao + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/tipo-produto", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from TipoProduto";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/produto", function (request, response) {
  var idLoja = request.body.idLoja;
  var idTipoProduto = request.body.idTipoProduto;
  var preco = request.body.preco;
  var descricao = request.body.descricao;
  var tamanho = request.body.tamanho;
  var url = request.body.url;

  if (idLoja != undefined && idTipoProduto != undefined && preco != undefined && descricao != undefined && tamanho != undefined && url != undefined) {

    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO Produto (idLoja ,idTipoProduto ,preco ,descricao ,tamanho, url) VALUES ("' + idLoja + '", "' + idTipoProduto + '", "' + preco + '", "' + descricao + '", "' + tamanho + '", "' + url + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/produto", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Produto";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.get("/api/pesquisa", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Pesquisa";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/pesquisa", function (request, response) {
  var data_pesquisa = request.body.data_pesquisa;
  var idCliente = request.body.idCliente;
  var texto_chave = request.body.texto_chave;
  var resultado_vr = request.body.resultado_vr;

  if (data_pesquisa != undefined && idCliente != undefined && texto_chave != undefined && resultado_vr != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO Pesquisa (data_pesquisa ,idCliente ,texto_chave ,resultado_vr) VALUES ("' + data_pesquisa + '", "' + idCliente + '", "' + texto_chave + '", "' + resultado_vr + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/imagem", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Imagem";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/imagem", function (request, response) {
  var url = request.body.url;
  var descricao = request.body.descricao;

  if (url != undefined && descricao != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO Imagem (url ,descricao) VALUES ("' + url + '", "' + descricao + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/cliente-pesquisa-imagem", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from ClientePesquisaImagem";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/cliente-pesquisa-imagem", function (request, response) {
  var idPesquisa = request.body.idPesquisa;
  var idImagem = request.body.idImagem;

  if (idImagem != undefined && idPesquisa != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO ClientePesquisaImagem (idImagem ,idPesquisa) VALUES ("' + idImagem + '", "' + idPesquisa + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/cliente-imagem", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from ClienteImagem";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/cliente-imagem", function (request, response) {
  var idImagem = request.body.idImagem;
  var idCliente = request.body.idCliente;
  var resultado = request.body.resultado;

  if (idImagem != undefined && idCliente != undefined && resultado != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO ClienteImagem (idImagem ,idCliente, resultado) VALUES ("' + idImagem + '", "' + idCliente + '", "' + resultado + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/resposta", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from Resposta";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/resposta", function (request, response) {
  var idProduto = request.body.idProduto;

  if (idProduto != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO Resposta (idProduto ) VALUES ("' + idProduto + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/resposta-pesquisa", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from RespostaPesquisa";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/resposta-pesquisa", function (request, response) {
  var idPesquisa = request.body.idPesquisa;
  var idResposta = request.body.idResposta;
  var resultado = request.body.resultado;
  var horario = request.body.horario;
  var atendido = request.body.atendido;

  if (idPesquisa != undefined && idResposta != undefined && resultado != undefined && horario != undefined && atendido != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var sql = 'INSERT INTO RespostaPesquisa (idPesquisa ,idResposta ,resultado ,horario ,atendido ) VALUES ("' + idPesquisa + '", "' + idResposta + '", "' + resultado + '", "' + horario + '", "' + atendido + '");'
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        response.send(JSON.stringify(result));
        response.end();
      });
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.post("/api/broadcast/", function (request, response) {
  var texto_chave = request.body.texto_chave;
  var idCliente = request.body.idCliente;
  var urls = JSON.parse(request.body.urls);
  var resultado_vr = request.body.resultado_vr;
  var imagensAdded = [];
  var data_pesquisa = new Date();

  if (texto_chave != undefined && idCliente != undefined && urls != undefined && resultado_vr != undefined) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      var promissePesquisa = new Promise(
        function (resolve, reject) {
          var sql = 'INSERT INTO Pesquisa (data_pesquisa ,idCliente ,texto_chave ,resultado_vr) VALUES ("' + data_pesquisa + '", "' + idCliente + '", "' + texto_chave + '", "' + resultado_vr + '");'
          connection.query(sql, function (err, result) {
            // connection.release();
            if (err) throw err;
            resolve(result);
          });
        });

      promissePesquisa.then(
        function (resultAddPesquisa) {
          for (const imagem of urls) {

            var descricao = "";
            var url = imagem.url_imagem;

            var sql = 'INSERT INTO Imagem (url ,descricao) VALUES ("' + url + '", "' + descricao + '");'
            connection.query(sql, function (err, result) {

              var idImagem = result.insertId;
              addClienteImagem(idImagem, idCliente, connection);
              addClientePesquisaImagem(idImagem, resultAddPesquisa.insertId, connection);
              // connection.release();
              if (err) throw err;
            });
          }

          var promisseLoja = new Promise(
            function (resolve, reject) {
              var sql = 'SELECT * FROM Loja'

              connection.query(sql, function (err, result) {
                // connection.release();
                if (err) throw err;
                resolve(result);
              });
            });

          promisseLoja.then(
            function (lojas) {
              if (lojas != undefined) {
                for (const loja of lojas) {
                  addRespostaPesquisaLoja(resultAddPesquisa.insertId, loja.idLoja, connection);
                  addRespostaPesquisa(resultAddPesquisa.insertId, connection);
                }
              }
            }
          )

          connection.release();
        });

      response.send("Inserido!");
      response.end();
    });
  } else {
    response.end("Parâmetros inválidos!");
  }
});

app.get("/api/resposta-pesquisa-loja/by-id", function (request, response) {

  var idLoja = request.query.idLoja;

  var array_resposta_pesquisa = [];

  pool.getConnection(function (err, connection) {
    if (err) throw err;

    var sql = "SELECT * "
      + " FROM Cliente"
      + " INNER JOIN Pesquisa "
      + " ON Pesquisa.idCliente = Cliente.idCliente"
      + " INNER JOIN RespostaPesquisaLoja"
      + " ON RespostaPesquisaLoja.idPesquisa = Pesquisa.idPesquisa"
      + " INNER JOIN ClientePesquisaImagem"
      + " ON Pesquisa.idPesquisa = ClientePesquisaImagem.idPesquisa"
      + " INNER JOIN ClienteImagem"
      + " ON ClientePesquisaImagem.idImagem = ClienteImagem.idImagem"
      + " INNER JOIN Imagem"
      + " ON ClienteImagem.idImagem = Imagem.idImagem"
      + " WHERE Pesquisa.data_pesquisa <> '22/04/2018' AND Pesquisa.data_pesquisa <> '1537697257245'";

    connection.query(sql, function (err, result) {

      connection.release();
      if (err) throw err;
      // response.end("" + JSON.stringify(result));

      for (var responsePesquisa of result) {
        var contains = false;
        for (var resposta_pesquisa of array_resposta_pesquisa) {
          if (resposta_pesquisa.idPesquisa == responsePesquisa.idPesquisa) {
            contains = true;
            resposta_pesquisa.url.push(responsePesquisa.url);
          }
        }

        if (contains == false) {
          var resposta_pesquisa = {};

          resposta_pesquisa.idPesquisa = responsePesquisa.idPesquisa;
          resposta_pesquisa.texto_chave = responsePesquisa.texto_chave;
          resposta_pesquisa.cpf = responsePesquisa.cpf;
          resposta_pesquisa.nome = responsePesquisa.nome;
          resposta_pesquisa.data_nasc = responsePesquisa.data_nasc;
          resposta_pesquisa.sexo = responsePesquisa.sexo;
          resposta_pesquisa.tamanho_roupa = responsePesquisa.tamanho_roupa;
          resposta_pesquisa.data_pesquisa = responsePesquisa.data_pesquisa;
          resposta_pesquisa.resultado_vr = responsePesquisa.resultado_vr;
          resposta_pesquisa.idLoja = responsePesquisa.idLoja;

          resposta_pesquisa.url = [];
          resposta_pesquisa.url.push(responsePesquisa.url);
          array_resposta_pesquisa.push(resposta_pesquisa);
        }
      }

      response.end("" + JSON.stringify(array_resposta_pesquisa));

    });
  });
});

app.get("/api/resposta-pesquisa-loja", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "select * from RespostaPesquisaLoja";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});


// app.post("/api/selecao", function (request, response) {
//   var idPesquisa = request.body.idPesquisa;
//   var idProduto = request.body.idProduto;

//   if (idPesquisa != undefined && idProduto != undefined) {
//     pool.getConnection(function (err, connection) {
//       if (err) throw err;
//       var sql = 'INSERT INTO Selecao (idPesquisa ,idProduto) VALUES ("' + idPesquisa + '", "' + idProduto + '");'
//       connection.query(sql, function (err, result) {
//         connection.release();
//         if (err) throw err;
//         response.send(JSON.stringify(result));
//         response.end();
//       });
//     });
//   } else {
//     response.end("Parâmetros inválidos!");
//   }
// });



function addRespostaPesquisaLoja(idPesquisa, idLoja, connection) {

  var resposta = false;
  var sql = 'INSERT INTO RespostaPesquisaLoja (idPesquisa ,idLoja, resposta) VALUES ("' + idPesquisa + '", "' + idLoja + '", "' + resposta + '");'
  connection.query(sql, function (err, result) {
    // connection.release();
    if (err) throw err;
    return true;
  });
}

function addClienteImagem(idImagem, idCliente, connection) {

  var resultado = true;
  var sql = 'INSERT INTO ClienteImagem (idImagem ,idCliente, resultado) VALUES ("' + idImagem + '", "' + idCliente + '", "' + resultado + '");'
  connection.query(sql, function (err, result) {
    // connection.release();
    if (err) throw err;
    return true;
  });
}

function addClientePesquisaImagem(idImagem, idPesquisa, connection) {
  var sql = 'INSERT INTO ClientePesquisaImagem (idImagem ,idPesquisa) VALUES ("' + idImagem + '", "' + idPesquisa + '");'

  connection.query(sql, function (err, result) {
    // connection.release();
    if (err) throw err;
    return true;
  });
}

function addRespostaPesquisa(idPesquisa, connection) {
  var idResposta = 1;
  var resultado = false;
  var horario = "";
  var atendido = false;

  var sql = 'INSERT INTO RespostaPesquisa (idPesquisa ,idResposta, resultado, horario, atendido) VALUES ("' + idPesquisa + '", "' + idResposta + '", "' + resultado + '", "' + horario + '", "' + atendido + '");'

  connection.query(sql, function (err, result) {
    // connection.release();
    if (err) throw err;
    return true;
  });
}

function getAllLojas(connection) {
  var sql = 'SELECT * FROM Loja'

  connection.query(sql, function (err, result) {
    // connection.release();
    if (err) throw err;
    return result;
  });
}

app.get("/api/produto/by-id-loja", function (request, response) {
  var idLoja = request.query.idLoja;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "SELECT *, Produto.descricao as descricaoProduto from Produto "
      + " RIGHT JOIN TipoProduto"
      + " ON Produto.idTipoProduto = TipoProduto.idTipoProduto"
      + " WHERE Produto.idLoja = '" + idLoja + "'";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.get("/api/selecao", function (request, response) {
  pool.getConnection(function (err, connection) {
    if (err) throw err;
    var sql = "SELECT * FROM Selecao"
              + " INNER JOIN Pesquisa"
              + " ON Selecao.idPesquisa = Pesquisa.idPesquisa"
              + " INNER JOIN Produto"
              + " ON Produto.idProduto = Selecao.idProduto"
              + " INNER JOIN Loja"
              + " ON Produto.idLoja = Loja.idLoja"
              + " INNER JOIN RespostaPesquisa"
              + " ON RespostaPesquisa.idPesquisa = Pesquisa.idPesquisa"
              + " WHERE (RespostaPesquisa.atendido = false OR  RespostaPesquisa.atendido = 0)";

    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.post("/api/selecao", function (request, response) {
  var idPesquisa = request.body.idPesquisa;
  var resultado = request.body.resultado;

  pool.getConnection(function (err, connection) {
    if (err) throw err;
  
    var sql = "UPDATE RespostaPesquisa SET resultado ='" + resultado + "', atendido = '1' WHERE idPesquisa='" + idPesquisa +"'";
console.log(sql);
    connection.query(sql, function (err, result) {
      connection.release();
      if (err) throw err;
      response.end("" + JSON.stringify(result));
    });
  });
});

app.get("/api/sugestoes", function (request, response) {
  var sugestoes = [
    {
      "nome_artista": "Silvio Santos",
      "url_foto": "https://uploads.metropoles.com/wp-content/uploads/2018/06/07115731/silvio-2-840x560.jpg"
    },
    {
      "nome_artista": "Beyonce",
      "url_foto": "https://c.tribune.com.pk/2018/09/1808927-beyonce-1537602497-928-640x480.png"
    },
    {
      "nome_artista": "Jairo Iglesias",
      "url_foto": "https://miro.medium.com/fit/c/240/240/0*DZ8al2BRL9u6Dk7N."
    },
  ];

  response.end("" + JSON.stringify(sugestoes));
});


app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();


// app.get("/sayHello", function (request, response) {
//   var user_name = request.query.user_name;
//   response.end("Hello " + user_name + "!");
// });

