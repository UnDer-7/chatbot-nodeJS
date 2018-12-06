const express = require('express')
const routes = express.Router()
const ASSISTANT = require('./assistantConfig/config')

const rootUrl = '/api'
let oldContext = {}

routes.post(`${rootUrl}/conversation`, (req, res) => {
  let { text } = req.body

  const params = {
    input: { text },
    workspace_id: 'ad2ab02d-8336-4efb-9f4e-1aa145887241',
    context: oldContext
  }

  ASSISTANT.message(params, (err, response) => {
    if (err) {
      console.trace('Error:\n')
      return res.status(500).json(err)
    }

    res.json(response)
    oldContext = response.context
    console.log('BOT: ', response.output.text)
  })
})
module.exports = routes
