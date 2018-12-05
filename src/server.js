const express = require('express')
const bodyParser = require('body-parser')

class App {
  constructor () {
    this.express = express()
    this.express.use(bodyParser.json())

    this.middleware()
    this.routes()
  }

  middleware () {
    this.express.use(express.urlencoded({ extended: false }))
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
