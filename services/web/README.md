# Web Service API


# Installation

## Pre-requisites

### Windows users only
- Confirm that you have access to PowerShell or a Git Shell.

### Linux users only
- Install the `build-essential` package to build some dependencies

### All users
- Install the newest version 10 of `node`
- Install the newest version of `yarn`

## General requirements

1) Install "NVM" Node Version Manager (Linux) (Windows)

2) Use NVM to install and use the appropriate version of Node. As of the writing of this document, we use v10.15.1. It's likely that any minor version of 10 is acceptable.

```bash
nvm install 10
```

3) Install the Yarn package manager. (website)

4) Clone the BlockHub repo.

```bash
git clone https://github.com/hyperbridge/blockhub
```

5) Create environment (.env) files for both `/services/web` and `/clients/web`

```bash
cd blockhub
cp services/web/.env.example services/web/.env
cp clients/web/.env.example clients/web/.env
```

Up-to-date resource urls should be used (document). As of the time of writing this page, the `.env.example` files contained all of the correct paths.

6 optional) Install something to test API endpoints. Insomnia (website) is recommended. (setup information)

7 optional) Install something to edit the database content. dbeaver (website) is recommended

8) Install a development environment of choice. The current recommendation is Visual Studio Code.

### Visual Studio Code Setup

For supporting eslint with Typescript in the API code, please install the "eslint" extension.

Update the VSCode config by adding the following, which will auto fix on save.

```json
"eslint.alwaysShowStatus": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "vue",
  { "language": "typescript", "autoFix": true },
  "typescriptreact"
],
"eslint.autoFixOnSave": true,
"files.autoSave": "afterDelay",
```


### Running API

The API is always running in the DEV environment, but if you will be developing endpoints then you will want to work locally. Be aware that the API running on DEV as well as the API running locally will both use the same remote DB.

1 optional) Update packages if your `./services/web/node_modules` directory is not up-to-date with `package.json`


```bash
cd ./services/web
yarn install
```

2 optional) Run Web Service API locally

```bash
cd ./services/web
cp .env.example .env
yarn dev
```

### Docker Guide

```sh
git clone https://github.com/hyperbridge/blockhub
cd services/web
docker-compose build
docker-compose up
```

To use your BlockHub account, create a `.env` file like:

```
BLOCKHUB_WEB_API_KEY=XXXXXXXXXXXXXXX
BLOCKHUB_ACCOUNT_ID=XXXXXXXXXXXXXXXX
```


To use your own database, create a `.env` file like:

```
NODE_ENV=development
PORT=9001
DATABASE_URL=postgres://postgres@localhost:5432/blockhub
SESSION_SECRET=XXXXXXXXXXXXXXX
```

For deployment, set the same variables in the environment.

## Routes

Refer to [SwaggerHub](https://app.swaggerhub.com/apis/hyperbri/blockhub-web-service/1.0.0) or the [api.yml](api.yml) file.


  _createQuery(params = {}) {
    let trx = params.transaction ? params.transaction.trx : null;
    let q = this.Model.query(trx).onBuildKnex(knexQueryBuilder => {
      knexQueryBuilder.on('query', queryData => {
        console.log(queryData)
      })
    })
    return q;
  }


## DB operations

Create and run a specific seed file:

```bash
npm i -g https://github.com/tgriesser/knex.git#master
knex seed:create roles
knex seed:run --specific=roles.js
```
