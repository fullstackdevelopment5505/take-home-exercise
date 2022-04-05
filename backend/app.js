const express = require('express');
const { TeamMember } = require('./model');
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/add', async (req, res) => {
  const result = await TeamMember.create(req.body);
  return res.json(result);
});

module.exports = app;
