const express = require('express');

const app = express.Router();
const repository = require('../respositories/TestRepository');



app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

module.exports = app;
