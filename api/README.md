## Environment
This app runs on a mysql database, you'll need to setup the file `ormconfig.json` with your connection's settings

## Installation

```bash
$ npm install
```

## Running Migrations
```
$ npm install -g typeorm ts-node
$ ts-node ./node_modules/typeorm/cli.js migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
