const express = require('express');

const routes = require('./routes');

require('./database/index');

const App = express();

App.use(express.json());
App.use(routes);

App.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
})