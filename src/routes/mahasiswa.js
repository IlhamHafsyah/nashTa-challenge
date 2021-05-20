const router = require('express').Router()
const uploadFile = require('../uploadfile/multer')
const {
  getDataMahasiswa,
  getAverageNilaiMahasiswa,
  getAverageNilaiJurusan,
  postDataMahasiswa
} = require('../controller/mahasiswa')

router.get('/', getDataMahasiswa)
router.get('/average', getAverageNilaiMahasiswa)
router.get('/averagejurusan', getAverageNilaiJurusan)
router.post('/tambahmahasiswa', uploadFile, postDataMahasiswa)

module.exports = router
