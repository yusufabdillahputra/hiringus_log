require('dotenv/config')

module.exports = {

  responseWithoutHeader: (res, status, result) => {
    const resultResponse = {}
    resultResponse.status = status
    resultResponse.result = result
    return res.status(resultResponse.status).json(resultResponse)
  },
  dotEnv: (ENV) => {
    return process.env[ENV]
  }

}
