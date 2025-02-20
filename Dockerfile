FROM node:22-alpine

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]

ENV DEV /opt/dev

WORKDIR $DEV

COPY package.json $DEV/

RUN npm i

COPY index.html .eslintrc.json .prettierconfigrc jest.config.js jest.setup.ts tsconfig.json tsconfig.node.json vite.config.ts .env $DEV/

COPY src $DEV/src