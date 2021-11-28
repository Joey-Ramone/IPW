# IPW
Internet e Programação web - 2º T.I CEP.

let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "colegio"
});

let nome;

con.connect(function(err) {
    if(err) throw "Erro ao conectar no banco de dados: " + err;
    con.query("SELECT * FROM aluno WHERE al_cod = 2", 
    function(err, result, fieds) {
        if(err) throw "Erro ao buscar dados: " + err;
        //console.log(result);
        result.forEach(registro => {
            console.log(registro.al_nome);
            nome = registro.al_nome;
        });
    })
})

let http = require('http');
let dt = require('./03.1-nodejs-my-module');

http.createServer(function(resquest, response){
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    response.write(nome);
    response.end();
}).listen(8080, function() {
    console.log("Servidor ligado: http://localhost:%d", 8080);
})
