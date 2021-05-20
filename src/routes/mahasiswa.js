const router = require('express').Router()
const {
  getDataMahasiswa,
  getAverageNilaiMahasiswa
} = require('../controller/mahasiswa')

router.get('/', getDataMahasiswa)
router.get('/average', getAverageNilaiMahasiswa)

module.exports = router
