const express = require('express')
const routes = express.Router()

const rootUrl = '/api'

routes.get(`${rootUrl}/conversation/:text*?`, (req, res) => {
  const { text } = req.params
  console.log(`TEXTO: ${text}`)

  res.json(text)
})
module.exports = routes
