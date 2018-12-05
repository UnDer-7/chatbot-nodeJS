const express = require('express');
const routes = express.Router();

const rootUrl = '/api';

routes.get(`${rootUrl}`, (req, res) => {
  return res.json('agora foi porra');
});
module.exports = routes;
