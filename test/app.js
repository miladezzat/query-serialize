const express = require('express');

const app = express();

const serialize = require('../index');

const port = process.env.PORT || 3000;

app.use(serialize);

app.get('/', (req, res) => res.status(200).send(req.conditions));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;
