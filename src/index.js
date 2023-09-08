const express = require('express');

const app = express();

const route = require('./router');

require('dotenv').config()

app.use(express.json());
app.use('/', route);

app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}/`));