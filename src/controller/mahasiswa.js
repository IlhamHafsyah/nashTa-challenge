const {
  getMahasiswa,
  getAverageMahasiswa,
  getAverageJurusan,
  postMahasiswa
} = require('../model/mahasiswa')
const helper = require('../helper/response')
const excelToJson = require('convert-excel-to-json')

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
  },
  postDataMahasiswa: async (req, res) => {
    try {
      const file = req.file.filename
      const result = excelToJson({
        sourceFile: './upload/' + file,
        header: { rows: 1 },
        columnToKey: {
          A: 'nim',
          B: 'nama',
          C: 'alamat',
          D: 'tanggalLahir',
          E: 'jurusan'
        }
      })
      const newResult = result.Sheet1
      for (let i = 0; i < newResult.length; i++) {
        postMahasiswa(newResult[i])
      }
      return helper.response(
        res,
        200,
        'success menambahkan mahasiswa',
        newResult
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
