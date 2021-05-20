const { getMahasiswa } = require('../model/mahasiswa')
const helper = require('../helper/response')

module.exports = {
  getDataMahasiswa: async (req, res) => {
    try {
      const { jurusan, dosen, namaMataKuliah, sort } = req.query
      const result = await getMahasiswa(jurusan, dosen, namaMataKuliah, sort)
      return helper.response(res, 200, 'Success get all mahasiswa', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
