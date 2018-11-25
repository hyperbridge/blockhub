const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { ExpressServer } = require('../lib/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const web3Setup = require('./middleware/web3');
const authCheck = require('./middleware/auth-check');

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@blockhub-89gr6.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(web3Setup);
app.use(authCheck);

const productsRoutes = require('./routes/products');
const commentsRoutes = require('./routes/comments');
const ethereumRoutes = require('./routes/ethereum');

app.use('/product', productsRoutes);
app.use('/comment', commentsRoutes);
app.use('/eth', ethereumRoutes);


app.use((req, res, next) => res.status(404).json({ msg: 'Inappropriate request' }));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({ msg: process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : err.msg || err.message || 'Internal server error (Unspecified message)'
  });
});


// app.listen(9000);
ExpressServer(app.listen(9000), { debug: true });