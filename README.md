# Cadastro de residentes
> Devido à pandemia muitos serviços de telemedicina entraram em funcionamento.
Durante a formação alunos de medicina não aprendem como realizar consultas a distância, sendo assim é importante incluir esse serviços dentro da residencia médica mas com o devido acompanhamento.

O cadastro e banco de dados se faz necessário para integrar aluno e professor ao sistema de telemedicina que está sendo desenvolvido.

## Container:
![container](https://user-images.githubusercontent.com/65667824/85177998-beb84b00-b253-11ea-8be7-e00e07de82f5.png)
![8080](https://user-images.githubusercontent.com/65667824/85177961-a2b4a980-b253-11ea-995a-31740187147f.png)


## Como instalar:
1. Faça o download dos os arquivos deste projeto e insira em um diretório de interesse;
2. Em um terminal Shell, dentro do diretório criado para este projeto, digite:
````sh
docker-compose up
````
para instalar todos as ferramentas necessárias.

3. Abra o navegador e digite: localhost:8080



# Tecnicas_prog_final
"name": "trabalhofinal",
"version": "0.0.1",
"description": "cadastro residentes para utilizar em sistema de telemedicina",
"main": "acesso-db.js",
"keywords": [],
"author": "Aline Weschenfelder",
"license": "ISC",
"dependencies": {
"body-parser": "^1.17.2",
"cors": "2.8.3",
"express": "^4.15.3",
"mongoose": "^4.11.1",
"node-restful": "^0.2.6"
 

