const Router = require('express').Router()

const home = require('./home')
const log = require('./log')

Router
  .use('/', home)
  .use('/', log)

module.exports = Router
