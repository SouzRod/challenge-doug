# Challenge Doug

Este repositório contém dois microserviços independentes:
- **bfb-ms-technical** – Serviço responsável por retornar informações de técnicos.
- **bfb-ms-signature** – Serviço responsável por retornar informações de assinaturas de clientes.

Ambos os serviços utilizam bancos distintos (PostgreSQL e MongoDB) e são orquestrados via **Docker Compose**.

---

## 📁 Estrutura do Repositório

```
/
├── bfb-ms-technical/      # Serviço Java + Spring Boot
├── bfb-ms-signature/      # Serviço NodeJS + Fastify
├── docker-compose.yml
└── README.md
```

---

# 1. Serviço: bfb-ms-technical

Serviço responsável por retornar os dados de um técnico com base no seu ID.

## 🛠️ Tecnologias
- Java
- Spring Boot
- PostgreSQL
- Docker

---

## 🔗 Rota

**GET** `http://localhost:3001/api/bfbmstechnical/v1/technical/:id`

### Parâmetros
| Nome | Tipo | Obrigatório | Descrição |
|------|-------|-------------|------------|
| `id` | string | sim | ID do técnico |

---

## 📌 Exemplo de cURL

```bash
curl http://localhost:3001/api/bfbmstechnical/v1/technical/:id
```

---

## 📥 Resposta – Status 200

```json
{
  "id": "019a8e77-c468-702a-a267-28fd75ffdcb3",
  "name": "Robson Pereira dos Santos",
  "email": "robson.pereira@email.com",
  "documentNumber": "45865985519",
  "phoneDDD": "11",
  "phoneNumber": "999999999",
  "status": "Active"
}
```

# 2. Serviço: bfb-ms-signature

Serviço responsável por retornar os dados de assinatura de um cliente com base no ID.

## 🛠️ Tecnologias
- JavaScript
- Node.js
- Fastify
- MongoDB
- Docker

---

## 🔗 Rota

**GET** `http://localhost:3002/api/bfbmssignature/v1/signature/:id`

### Parâmetros
| Nome | Tipo | Obrigatório | Descrição |
|------|-------|-------------|------------|
| `id` | string | sim | ID da assinatura |

---

## 📌 Exemplo de cURL

```bash
curl http://localhost:3002/api/bfbmssignature/v1/signature/:id
```

---

## 📥 Resposta – Status 200

```json
{
  "id": "019a8e77-c468-702a-a267-28fd75ffdcb3",
  "name": "Robson Pereira dos Santos",
  "email": "robson.pereira@email.com",
  "documentNumber": "45865985519",
  "dna": "0000000000100000000000000100000000000000100000000000000100000000000000000000000000000000100000000000001",
  "phone": {
    "ddd": "11",
    "number": "999999999"
  },
  "address": {
    "zipcode": "99999999",
    "country": "Brasil",
    "state": "SP",
    "city": "São Paulo",
    "neighborhood": "Centro",
    "street": "Rua abc",
    "number": "598",
    "complement": "apto 115 bloco 3"
  }
}
```

# ▶️ Como Rodar os Serviços

1. Certifique-se de ter **Docker** e **Docker Compose** instalados.
2. No diretório raiz, execute:

```bash
docker compose up --build
```

3. Após a inicialização, acesse:

- http://localhost:3001/api/bfbmstechnical/v1/technical/:id  
- http://localhost:3002/api/bfbmssignature/v1/signature/:id  

---


# 🚀 Desafio

Desenvolva um projeto que utilize os serviços disponíveis para criar um sistema que vincule assinaturas a técnicos.

## Rota para elegibilidade da assinatura

Crie uma rota que receba um ID de assinatura e valide se a assinatura é elegível para ser vinculada a um técnico.

Dados que devem ser validados:

- dna da assinatura deve ser 1 nas posições 62 e 85.

se for elegível retornar o seguinte payload:
```json
  {
    "status": 200,
    "isEligible": true
  }
```

se a assinatura não for elegível retornar o seguinte payload:
```json
  {
    "status": 200,
    "isEligible": false
  }
```

se a assinatura não existir retornar o seguinte payload:
```json
  {
    "status": 404,
    "error": "Not Found",
    "message": "Signature not found"
  }
```

## Rota de vinculação de assinatura a técnico

Crie uma rota que receba um ID de assinatura e um ID de técnico, valide se o técnico está ativo e vincule a assinatura ao técnico.

Dados que devem ser vinculados:

- id do técnico
- nome do técnico
- email do técnico
- id do cliente
- nome do cliente
- email do cliente
- telefone do cliente

se a assinatura não existir retornar o seguinte payload:
```json
  {
    "status": 404,
    "error": "Not Found",
    "message": "Signature not found"
  }
```

se o técnico não existir retornar o seguinte payload:
```json
  {
    "status": 404,
    "error": "Not Found",
    "message": "Technical not found"
  }
```

se o técnico não estiver ativo retornar o seguinte payload:
```json
  {
    "status": 400,
    "error": "Bad Request",
    "message": "Technical not active"
  }
```

se a assinatura já estiver vinculada a um técnico retornar o seguinte payload:
```json
  {
    "status": 400,
    "error": "Bad Request",
    "message": "Signature already linked to technical"
  }
```

se estiver tudo ok retornar o seguinte payload:
```json
  {
    "status": 200,
    "message": "Signature linked to technical"
  }
```
