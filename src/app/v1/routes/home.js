const Router = require('express').Router()
const controller = 'home'
const { landing, rules } = require(`../controllers/${controller}`)

Router
  .get('/', landing)
  .get(`/${controller}/rules`, rules)

module.exports = Router
