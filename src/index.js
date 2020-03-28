const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // this package allows specifics frontends urls to access this backend
app.use(express.json());
app.use(routes);

app.listen(3333);