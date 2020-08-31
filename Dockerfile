from node:12

WORKDIR /usr/src/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api/ .

RUN npm run build

CMD ["node", "dist/main"]
