const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

// Middleware Express: Error Handler (Only after routes)
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
