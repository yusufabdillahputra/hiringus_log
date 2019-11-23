const Router = require('express').Router()
const controller = 'log'
const {
  createData,
  readAll
} = require(`../controllers/${controller}`)

Router
  .get(`/${controller}`, readAll)
  .post(`/${controller}`, createData)

module.exports = Router
