# Desafios do Curso Full Cycle

Este repositório contém os desafios propostos durante o curso Full Cycle.

## Sumário

1. [Docker](#docker)
   - [1.1 Go Lang e Docker](#11---go-lang-e-docker)
   - [1.2 Nginx como Proxy Reverso e Node.js](#12---nginx-como-proxy-reverso-e-nodejs)
2. [CI e SonarCloud](#ci-e-sonarcloud)

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
