const {
  getMahasiswa,
  getAverageMahasiswa,
  getAverageJurusan
} = require('../model/mahasiswa')
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
  },
  getAverageNilaiMahasiswa: async (req, res) => {
    try {
      const result = await getAverageMahasiswa()
      return helper.response(
        res,
        200,
        'Success get nilai rata-rata mahasiswa',
        result
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getAverageNilaiJurusan: async (req, res) => {
    try {
      const result = await getAverageJurusan()
      return helper.response(
        res,
        200,
        'Success get nilai rata-rata jurusan',
        result
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
