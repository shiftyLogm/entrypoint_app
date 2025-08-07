# Documentação do Projeto

## Execução do Back-End

Para executar o back-end da aplicação, é indispensável que o **Docker** e o **Docker Compose** estejam devidamente instalados e configurados em sua máquina.

### Requisitos

- [Docker](https://www.docker.com/products/docker-desktop/)
- Docker Compose funcional (geralmente já incluso no Docker Desktop)
- Node.js e Yarn (para iniciar o servidor local)

### Passo a passo para execução

1. Abra o terminal e navegue até a **pasta raiz** do diretório back-end do projeto.

2. Execute o seguinte comando para iniciar os containers definidos no arquivo `docker-compose.yml`:

```bash
docker-compose up -d
````

Esse comando executará os serviços descritos no arquivo docker-compose.yml, como banco de dados e outras dependências, criando imagens e containers automaticamente em segundo plano (-d significa detached mode).
 Após o ambiente estar devidamente inicializado pelo Docker, inicie o servidor back-end da API com o comando:

```bash
yarn dev
```
Esse comando utilizará os scripts configurados no projeto para iniciar o ambiente de desenvolvimento da API.
Configuração de IP para ambiente local

Durante o desenvolvimento local, é importante garantir que a aplicação (especialmente se estiver se comunicando com o front-end ou apps móveis) esteja utilizando o endereço IPv4 local correto.

Para isso, localize o seu endereço IP local (IPv4). Em sistemas Windows, você pode executar o seguinte comando no terminal:

```bash
ipconfig
```

Procure pela seção "Endereço IPv4" e utilize esse IP para substituir os campos de URL local (como localhost ou 127.0.0.1) nos arquivos de configuração do front-end, se necessário.