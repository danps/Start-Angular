# Servidor FAKE [json-server](https://www.npmjs.com/package/json-server)

O  `json-server` é uma biblioteca JavaScript que permite criar uma API RESTful simulada com base em um arquivo JSON. Ele é útil para prototipagem rápida, desenvolvimento front-end e testes, sem a necessidade de configurar um backend completo.

 
## Como Funciona?

### 1. Instalação

O comando `npm i json-server` é utilizado para instalar o pacote `json-server` via npm (Node Package Manager). 

```bash
npm i json-server
```
  

### 2. Inicialização do Servidor
Inicie o servidor com o seguinte comando:

```bash
json-server --watch produtos.json
```

### 3. Acesso à API
Com o servidor em execução, você pode acessar a API simulada nos seguintes endpoints:

* GET /produtos: Retorna todos os posts.

* GET /produtos/1: Retorna o post com id 1.

* POST /produtos: Adiciona um novo post.

* PUT /produtos/1: Atualiza o post com id 1.

* DELETE /produtos/1: Deleta o post com id 1.

