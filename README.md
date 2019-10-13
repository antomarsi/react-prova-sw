# React Prova SW

# Prova React

Este projeto tem de finalidade testar as habilidades do desenvolvedor.
Uma versão online pode ser vista no seguinte aqui: https://antomarsi.github.io/react-prova-sw/

## Requisitos:

Desenvolver um PWA usando React JS com as características abaixo:

- Uma tela com um campo "Nome" e abaixo, uma seleção visual para optar
  por um gênero (homem ou mulher).
- Após esta primeira etapa, mais uma tela com duas opções disponíveis:
  "Jedi" ou "Sith".
- Numa terceira etapa, com base nas escolhas anteriores, escolher um
  personagem e, ao clicar em OK, mostrar numa última tela o personagem
  em questão e a mensagem abaixo:
  "Bem-vindo, "NOME"!"
- Além disso, você deverá consumir um web service/API à sua escolha para
  demonstrar o resultado no app.
- Serão observados e avaliados fatores como código, lógica, interface e
  criatividade.
- Surpreenda-nos com um incremento ao que foi solicitado e fique à
  vontade (caso o tempo permita) de ir além.

## Começando pelo começo

Se você já sabe utilizar uma aplicação ReactJS, você já sabe como começar, caso contrário, siga as instruções abaixo:

### Pré-requisitos

Este projeto utilizar ReactJS, então você precisa installar o NPM ([Node.js](https://nodejs.org)). É opcional porém recomendado utilizar o [Yarn](https://yarnpkg.com).

```
node +8
npm +6
yarn +1.15
```

### Instalando

Depois de clonar ou baixar o repositório, vá até a pasta do projeto e instale as depedencias.

```
$ npm install
OU
$ yarn
```

## Rodando em desenvolvimento (localmente)

Rode o comando abaixo para executar o `react-script start`, ou você pode utilizar um servidor a escolha.
Se você utilizar o código abaixo, irá abrir uma página http://localhost:3000 no seu navegador.

```
$ npm start
OU
$ yarn start
```

## Compilar

Para compilar o projeto e minificar todos os arquivos, só utilizar o comando `build`, após o build, uma pasta chamada `build` será criada na raiz do projeto.
OBS: O comando build sempre é executado quando executado o Deploy 

```
$ npm run build
OU
$ yarn build
```

## Deployment

Para publicar para o seu [GithubPages](https://pages.github.com/), confirme que está habilitado em seu projeto github e utilize a branch `gh-pages`.
Rode o comando abaixo, ele ira executar o `build` e enviará a pasta para o seu [GithubPages](https://pages.github.com/):

```
$ npm run deploy
OU
$ yarn deploy
```

## Author

- **Antônio Marco da Silva** - [antomarsi](https://github.com/antomarsi).
