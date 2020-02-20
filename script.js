var http = require('http');//importando o módulo http para dentro da variável

var server = http.createServer(function(req,res){//criando a variavel que recebe o createServer com parâmetros req e res (requisição e resposta, respectivamente). fazemos depois por que precisamos do http para criar um servidor. função anonima de callback
	var categoria = req.url;//aqui vamos receber a url requisitada pelo cliente
	if (categoria == '/cursos') {//dependendo do valor de sua url retornará esta linha abaixo
		res.end("<html><body><h1>IFMS - Notícias de curso</h1></body></html>");//resposta final, devolvendo um código html/string para o usuário
	}else if (categoria == '/esportes') {//dependendo do valor de sua url retornará esta linha abaixo
		res.end("<html><body><h1>IFMS - Notícias de Esportes</h1></body></html>");//resposta final, devolvendo um código html/string para o usuário
	}else if (categoria == '/pesquisa') {//dependendo do valor de sua url retornará esta linha abaixo
		res.end("<html><body><h1>IFMS - Notícias de Pesquisa</h1></body></html>");//resposta final, devolvendo um código html/string para o usuário
	}else{//dependendo do valor de sua url retornará esta linha abaixo
		res.end("<html><body><h1>Portal de Notícias IFMS</h1></body></html>");//resposta final, devolvendo um código html/string para o usuário
	}
});
//se não houver especificação do url vamos de pagina html padrão.
server.listen(3000);//aqui nosso server agora está escutando a variável 3000
console.log("Escutando a porta 3000");//Esse é só para ver a porta que estamos executando pelo cmd
//função do req = conseguir o que o usuário quer
//funão do res = dar a resposta ao usuário com base na req

/*
Para executar e testar um código, primeiro devemos criar e salvar um arquivo JS (Ctrl+S; Nome do arquivo: nome.js; Tipo do arquivo: Todos o arquivos) e por nosso código nele, no nosso caso, já temos ele explicado acima.
Após termos nosso código no IDE e o salvar, apertamos as teclas Windows+R, ou usamos a barra de pesquisa do Windows, agora, pesquisamos por 'cmd' e damos enter.
Dentro do cmd, vamos para a pasta onde está salvo nosso arquivo JS, usando o comando "cd [diretório]", onde preenchemos esse local [diretório] com a pasta desejada, no caso dessa máquina foi C:\Users\aluno\Documents\Framework\aula b.
Você consegue esse diretório entrando na pasta e clicando na barra, ao clicar ele te dará o diretório, aí é só copiar e colar apos o cd.
Dentro da pasta no cmd executamos o comando "node [arquivo]", onde [arquivo] é o nome como você salvou o seu arquivo JS criado no inicio, no meu caso "node script". 
Pronto, o código já está rodando na máquina, e nele, temos o "server.listen(3000)", vamos usar esse número. 3000 porque por convenção, este número e o 8000 são reservados para localhost
Abrindo o nosso navegador iremos a barra de url e digitar "http://localhost:3000/" e assim podemos ter acesso ao nosso arquivo JS no navegador.
*/

/*
Função dos if, if else e else: Analisar a categoria(a url que o usuário requeriu) e dar uma resposta com base nisso
Função dos res.end: Dar uma resposta ao usuário por forma de um html/string com base no que ele pediu
O restante está mais claro nas linhas.
*/