# :haircut: Hair Day - Aplicação WEB para agendamentos de cortes de cabelo

## :hammer_and_wrench: Tecnologias utilizadas

![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript&logoColor=white&style=for-the-badge)
![Day.js](https://img.shields.io/badge/Day.js-manipulação%20de%20datas-blue?logo=day.js&logoColor=white&style=for-the-badge)
![JSON Server](https://img.shields.io/badge/JSON%20Server-API%20fake-brightgreen?logo=json&logoColor=white&style=for-the-badge)
![Webpack 5](https://img.shields.io/badge/Webpack%205-empacotador-purple?logo=webpack&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/Babel-transpilador%20ES6%2B-orange?logo=babel&logoColor=white&style=for-the-badge)
![CSS Loader](https://img.shields.io/badge/CSS%20Loader-carregamento%20de%20estilos-blue?logo=css3&logoColor=white&style=for-the-badge)
![Style Loader](https://img.shields.io/badge/Style%20Loader-carregamento%20de%20estilos-blue?logo=css3&logoColor=white&style=for-the-badge)
![HTML Webpack Plugin](https://img.shields.io/badge/HTML%20Webpack%20Plugin-index.html-red?logo=html5&logoColor=white&style=for-the-badge)

Nesta aplicação, é possível selecionar datas e horários para agendar clientes em uma **API fake** criada com **JSON Server**, além de remover esses cadastros.
Os horários funcionam dinâmicamente, ou seja, ficam indisponíveis se já passados ou agendados por alguém.

## :camera: Foto do projeto

<img src="./src/assets/hair-day-project.png" alt="Foto do projeto" />

## :bulb: Como testar o projeto

**1. Ter o Git instalado em sua máquina;**
**2. Clonar o repositório usando um terminal;**

```bash
git clone https://github.com/llucasgs/hairday-project.git
```

Isso vai criar uma pasta com o nome do repositório. Então, abra a pasta dentro do editor de código **VS Code.**

**3. Instale as dependências do projeto;**

```bash
npm install
```

**4. Use os comandos abaixo para:**
4.1. Rodar a API json server

```bash
npm run server
```

4.2. Rodar o servidor local (Webpack Dev Server) e testar a aplicação

```bash
npm run dev
```
