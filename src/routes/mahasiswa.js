const router = require('express').Router()
const {
  getDataMahasiswa,
  getAverageNilaiMahasiswa,
  getAverageNilaiJurusan
} = require('../controller/mahasiswa')

router.get('/', getDataMahasiswa)
router.get('/average', getAverageNilaiMahasiswa)
router.get('/averagejurusan', getAverageNilaiJurusan)

module.exports = router
