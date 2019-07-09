# Web Service API


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
