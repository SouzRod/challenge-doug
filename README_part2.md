# Challenge beginner part 2

Utilizar os mesmos serviços do desafio anterior **Challenge beginner**:
- **bfb-ms-technical** – Serviço responsável por retornar informações de técnicos.
- **bfb-ms-signature** – Serviço responsável por retornar informações de assinaturas de clientes.

Neste desafio você vai precisar usar a api [ViaCep](https://viacep.com.br/)

### Usando API do ViaCep

Basta fazer uma requisição para a seguinte rota colocando o cep desejado no parâmetro da rota:

```
curl viacep.com.br/ws/:cep/json/
```
Exemplo
```
curl viacep.com.br/ws/64010020/json/
```

Retorno:
```json
{
  "cep": "64010-020",
  "logradouro": "Quadra Mocambinho - Setor A",
  "complemento": "de 4/5 a 5/6",
  "unidade": "",
  "bairro": "Mocambinho",
  "localidade": "Teresina",
  "uf": "PI",
  "estado": "Piauí",
  "regiao": "Nordeste",
  "ibge": "2211001",
  "gia": "",
  "ddd": "86",
  "siafi": "1219"
}
```

</br>
</br>

# 🚀 Desafio

## Rota para salvar o endereço do técnico

Crie uma rota que receba o ID do técnico, o CEP dele, o número da casa e o complemento.

Com base no CEP, pegar o endereço dele e salvar com os dados passados na requisição em um banco.

Dados a serem salvos no banco:

```json
  {
    "_id": String, //ID do técnico
    "zipcode": String, //CEP do técnico
    "street": String,
    "complement": String,
    "number": String,
    "neighborhood": String,
    "city": String,
    "state": String
  }
```

Se não encontrar o técnico retornar erro de acordo. </br>
Se não encontrar o endereço retornar erro de acordo. </br>
Se estiverem tentando salvar um endereço em um técnico que já foi salvo retornar erro de acordo. </br>

se estiver tudo ok retornar o seguinte payload:
```json
  {
    "status": 201,
    "message": "Address successfully registered!"
  }
```


## Rota para alterar endereço do técnico

Crie uma rota que receba o ID do técnico, o CEP dele, o número da casa e o complemento.

Com base no CEP, pegar o endereço dele e alterar os dados no banco.

Se não encontrar o técnico retornar erro de acordo. </br>
Se não encontrar o endereço retornar erro de acordo. </br>

se estiver tudo ok retornar o seguinte payload:
```json
  {
    "status": 200,
    "message": "Address successfully upadted!"
  }
```

## Rota para deletar endereço do técnico

Crie uma rota que receba o ID do técnico e delete ele do banco

Se não encontrar o técnico retornar erro de acordo. </br>
Se não encontrar o endereço retornar erro de acordo. </br>

se estiver tudo ok retornar o seguinte payload:
```json
  {
    "status": 200,
    "message": "Address successfully deleted!"
  }
```


## Rota que traga os dados do técnico que mais atendeu chamados

Crie uma rota que traga os dados completo do técnico que mais atendeu chamado. + todas as assinaturas que ele fez chamado.

```json
{
  "id": "019a8e77-c468-702a-a267-28fd75ffdcb3",
  "name": "Robson Pereira dos Santos",
  "email": "robson.pereira@email.com",
  "documentNumber": "45865985519",
  "status": "Active",
  "phone": {
    "ddd": "11",
    "number": "999999999"
  },
  "address": {
    "zipcode": "64010020",
    "state": "PI",
    "city": "Teresina",
    "neighborhood": "Centro",
    "street": "Rua Sigma",
    "number": "11",
    "complement": ""
  },
  "signatureList": [
    "49aade00-4761-4809-b37b-54e25a9768ce",
    "b6883881-d669-4614-9971-7e530a178c70",
    "ae5a26e6-48c1-46d9-bea7-3385fb2a2755",
    "b9efc6c1-3d00-49c8-886a-691466d9996c",
    "17ede82b-2a05-4d38-8cbd-cf77ea8ba4eb",
    "34efcaf1-9f1d-4974-ae5f-49809823c563",
    "209a703b-6279-4d65-940b-710e44bcc9ff",
    "fe5cee6f-dc42-4243-ac16-74a95fb2dac1",
    "33363160-c554-458d-8860-669134666bc7",
    "e09cdf4e-cde9-4c16-a307-82dc08fcba10"
  ]
}
```
