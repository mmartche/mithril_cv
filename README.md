# Teste

> Projeto Scup Fale+ em [Mithril](http://lhorie.github.io/mithril/)

## Quick start

Tenha certeza que já ter instalado `node` e `npm`. Depois digite os seguintes comandos no terminal:

```
npm install -g bower gulp http-server

git clone https://github.com/mmartche/mithril_cv.git
cd mithril_cv

npm install
bower install
gulp compile

http-server build/public
```
> Alguns sistemas operacionais podem ter restrições com permissões, para resolver isto basta ter direitos administrativos e incluir o comando `sudo` antes da instalação.

> ex: `sudo npm install -g bower gulp http-server`
ex2: `sudo npm install`
ex3: `...`

Após executar os comandos acima, enquanto exibe a mensagem de que o servidor virtual esta sendo executado, acesse seu browser com a url: 
> http://localhost:8080


## Características do App

* Gulpfile
* Bower
* LESS & Bootstrap
* Mithril
* [JSX](http://lhorie.github.io/mithril/tools.html)
* [INCLUDE()](https://github.com/ng-vu/gulp-include-js) JavaScript files
* Módulos do Client side encapsulados em CommonJs
* Scripts e Estilos minificados para produção

##Demo

[clique aqui](http://scup.martche.ca/#/) para ver funcionando