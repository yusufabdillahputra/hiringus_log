const { responseWithoutHeader } = require('../../../helper/response')
const logModel = require('../models/log')

module.exports = {

  createData: async (req, res) => {
    try {
      const result = await logModel.createData(req.body)
      responseWithoutHeader(res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithoutHeader(res, 500, error)
    }
  },
  readAll: async (req, res) => {
    try {
      const result = await logModel.readAll(req.query)
      responseWithoutHeader(res, 200, result)
    } catch (error) {
      console.log(error)
      responseWithoutHeader(res, 500, error)
    }
  }

}
