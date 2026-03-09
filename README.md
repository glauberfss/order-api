# Order API - Desafio Técnico

API desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Instalação do projeto

Clone o repositório:

git clone https://github.com/SEU-USUARIO/order-api.git

Entre na pasta do projeto:

cd order-api

Instale as dependências:

npm install

## Executar a aplicação

Inicie o servidor com:

node server.js

A API ficará disponível em:

http://localhost:3000

## Endpoints da API

### Criar pedido

POST

http://localhost:3000/order

Body:

```json
{
 "numeroPedido": "v10089015vdb-01",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
 "items": [
  {
   "idItem": "2434",
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}



Transformação de dados (Mapping)

A API recebe os dados no seguinte formato:

numeroPedido → orderId
valorTotal → value
dataCriacao → creationDate

items:

idItem → productId
quantidadeItem → quantity
valorItem → price
