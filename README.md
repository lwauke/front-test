# Teste de front

## Como rodar

Adicione as suas variáveis de ambiente

```bash
cp .env{.example,}
```

### Rodando localmente:

```bash
nvm use
npm i
npm run dev
```

### Rodando via Docker:

```bash
docker build -t front-test .
docker run --mount type=bind,source="$(pwd)"/src,target=/opt/dev/src -it -p 5173:5173 front-test
```

### Rodando o backend

Rode esse projeto
https://github.com/lwauke/users-api

```bash
mkdir -p ~/dev
cd ~/dev
git clone git@github.com:lwauke/users-api.git
cd users-api
docker-compose up -d
```

Depois disso, acesse http://localhost:5173/ pelo navegador com algum dos usuários:

- usuário: joao_silva senha: 123456
- usuário: maria_souza senha: teste

## Build

```bash
npm run build
```

Para conferir se o build deu certo:

```bash
cd dist
npx serve
```

## Test

```bash
npm test
```

## Funcionalidades

- Login e logout
- Lembrar dispositivo usando LocalStorage
- Armazenamento de credenciais em SessionStorage caso `lembrar dispositivo` não for `true`
- Testes unitários
- Responsividade
- Menu "hamburguer" mobile
