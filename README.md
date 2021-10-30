# App Stock Exchange


## Sobre
Aplicação de negociações em bolsa de valores. É uma aplicação web 
simples que permite que cadastremos uma data, uma quantidade, um valor de 
uma negociação e que possamos exibir uma lista e que o usuário 
possa verificar o que foi cadastrado.

## Objetivo
Estudar e praticar TypeScript

## Regras de Negócio

* Uma negociação **não pode** ser modificada depois de criada
* Uma negociação **obrigatoriamente** tem uma data, quantidade e valor
* Seu **volume é calculado** multiplicando-se a quantidade negociada no dia pelo valor negociado

## Infraestrutura Utilizada e suas versões

* node.js v12.18.2
* Bootstrap v4.6.0
* TypeScript v4.2.2


## Para instalar as dependências 

Dentro da pasta frontend abra o terminal e execute o comando: 
`npm install` para instalar as dependências necessárias ao projeto. 

Ainda na pasta frontend abra o terminal e execute o comando: 
`npm install typescript@4.2.2 --save-dev` para instalar o TypeScript na versão 4.2.2

O comando `--save-dev` diz que é para utilizar apenas em ambiente de desenvolvimento, não vai para produção.


## Para rodar a aplicação

Dentro da pasta frontend, abra o terminal e execute o comando
`npm run server` que vai automaticamente abrir o navegador padrão.

Caso não abra digita o URL `localhost 3000` no seu navegador.

Se precisar compilar manualmente, executar na pasta frontend o 
comando `npm run compile`


