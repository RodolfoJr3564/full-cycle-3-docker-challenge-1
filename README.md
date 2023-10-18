# Desafios do Curso Full Cycle

Este repositório contém os desafios propostos durante o curso Full Cycle.

## Sumário

1. [Docker](#docker)
   - [1.1 Go Lang e Docker](#11---go-lang-e-docker)
   - [1.2 Nginx como Proxy Reverso e Node.js](#12---nginx-como-proxy-reverso-e-nodejs)
2. [CI e SonarCloud](#ci-e-sonarcloud)
3. [DDD Patterns](#ddd-patterns)
   - [3.1 - Métodos de OrderRepository](#31---métodos-de-orderrepository)
   - [3.2 - Eventos de Customer](#32---eventos-de-customer)

## Docker

### 1.1 - Go Lang e Docker

O objetivo deste desafio é criar uma imagem Docker que, ao ser executada, exibe a mensagem "Full Cycle Rocks!!". A imagem precisa ter menos de 2MB.

#### Imagem

- [Docker Registry](https://hub.docker.com/r/jr3564/fullcycle)

#### Validação

Execute o comando:

```bash
docker run -it --name full-cycle-rocks jr3564/fullcycle
```

Output esperado:

```bash
Full Cycle Rocks!!
```

### 1.2 - Nginx como Proxy Reverso e Node.js

Ao acessar o nginx na porta 8080, ele deve fazer uma chamada à aplicação Node.js. Esta aplicação adicionará um registro no nosso banco de dados MySQL, cadastrando um nome na tabela.

#### Validação

Para executar, navegue até o diretório:

```bash
cd ./docker/1.2-reverse-proxy
```

E então:

```bash
docker-compose up -d
```

O app deve estar rodando em:

- [Localhost:8080](http://localhost:8080/)

## CI e SonarCloud

Nesse desafio, iremos consolidar os conhecimentos em relação a criação de uma pipeline de CI, utilizando o Github actions e também a utilização do SonarCloud para analisar a qualidade do código.

#### Validação

- [Pull Request](https://github.com/RodolfoJr3564/full-cycle-3.0/pull/11)

## DDD Patterns

### 3.1 - Métodos de OrderRepository

Nesse desafio você deverá fazer com que a classe OrderRepository implemente totalmente os métodos definidos pelo OrderRepositoryInterface. Toda essa implementação deverá ser reproduzida através de testes.

#### Validação

```bash
cd ddd && npm run test
```

### 3.2 - Eventos de Customer

Agora que você já possui a base sobre Domain Events, implemente dois Eventos de Domínio para o agregado de Customer.

O primeiro evento deverá acontecer quando um novo Customer é criado. Nesse ponto, crie 2 handlers exibindo um "console.log".

Handler1: EnviaConsoleLog1Handler. Mensagem: "Esse é o primeiro console.log do evento: CustomerCreated".
Handler2: EnviaConsoleLog2Handler. Mensagem: "Esse é o segundo console.log do evento: CustomerCreated".
O segundo evento deverá ser disparado quando o endereço do Customer é trocado (método changeAddress()). Nesse caso, o ID, Nome, bem como os dados do endereço devem ser passados ao evento.

Handler: EnviaConsoleLogHandler. Mensagem: "Endereço do cliente: {id}, {nome} alterado para: {endereco}".
Todos os testes devem ser realizados para garantir o bom funcionamento dos eventos.

#### Validação

```bash
cd ddd && npm run test
```
