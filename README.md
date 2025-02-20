# Teste de front

## Como rodar

Adicione as suas variáveis de ambiente

```bash
cp .env{.example,}
#altere como desejar
```

### Localmente:

```bash
nvm use
npm i
npm run dev
```

### Via Docker:

```bash
docker build -t front-test .
docker run --mount type=bind,source="$(pwd)"/src,target=/opt/dev/src -it -p 5173:5173 front-test
```

### Backend

Rode esse projeto
https://github.com/lwauke/users-api

```bash
mkdir -p ~/dev
cd ~/dev
git clone git@github.com:lwauke/users-api.git
cd users-api
docker-compose up -d
cd -
```

Depois disso, acesse http://localhost:5173/

## Build

```bash
npm run build
```

## Funcionalidades

- Login e logout
- Lembrar dispositivo usando LocalStorage
- Armazenamento de credenciais em SessionStorage caso `lembrar dispositivo` não for `true`
- Testes unitários
- Responsividade na página de login
- Responsividade na home até tablet(faltou um menu mobile para total responsividade)
