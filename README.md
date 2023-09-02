# Desafios do Curso Full Cycle

Este repositório contém os desafios propostos durante o curso Full Cycle.

## Sumário

1. [Docker](#docker)
   - [1.1 Go Lang e Docker](###1.1-go-lang-e-docker)

## Docker

### 1.1 Go Lang e Docker

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
