const { responseWithoutHeader } = require('../../../helper/response')

module.exports = {

  landing: async (req, res) => {
    try {
      responseWithoutHeader(res, 200, 'stable')
    } catch (error) {
      responseWithoutHeader(res, 500, error)
    }
  },

  rules: async (req, res) => {
    try {
      const rules = {
        users: {
          createData: 1,
          readAll: 1,
          readById: 1,
          readByName: 1,
          readByCompany: 1,
          readTrash: 1,
          updateById: 1,
          deleteDataById: 1,
          softDeleteDataById: 1
        },
        skill: {
          createHeaderData: 1,
          readHeaderAll: 1,
          readHeaderById: 1,
          readHeaderByName: 1,
          readHeaderTrash: 1,
          updateHeaderById: 1,
          deleteHeaderDataById: 1,
          softDeleteHeaderDataById: 1,
          readBodyAll: 1,
          createBodyData: 1,
          readBodyByEngineer: 1,
          readBodyBySkill: 1
        },
        engineer: {
          createData: 1,
          readAll: 1,
          readById: 1,
          readByName: 1,
          readByCompany: 1,
          readTrash: 1,
          updateById: 1,
          deleteDataById: 1,
          softDeleteDataById: 1,
          readAllSortByName: 1,
          readAllSortBySkill: 1,
          readAllSortByUpdatedAt: 1
        },
        company: {
          createData: 1,
          readAll: 1,
          readById: 1,
          readByName: 1,
          readTrash: 1,
          updateById: 1,
          deleteDataById: 1,
          softDeleteDataById: 1
        }
      }
      responseWithoutHeader(res, 200, rules)
    } catch (error) {
      responseWithoutHeader(res, 500, error)
    }
  }

}
