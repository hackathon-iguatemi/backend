var express = require("express"), app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

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
        response.send(JSON.stringify(result));
        response.end();
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

