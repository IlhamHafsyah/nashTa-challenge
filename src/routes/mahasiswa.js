const router = require('express').Router()
const uploadFile = require('../uploadfile/multer')
const {
  getDataMahasiswa,
  getAverageNilaiMahasiswa,
  getAverageNilaiJurusan,
  postDataMahasiswa
} = require('../controller/mahasiswa')
const { authorization, isDosen } = require('../auth/auth')

router.get('/', authorization, getDataMahasiswa)
router.get('/average', authorization, getAverageNilaiMahasiswa)
router.get('/averagejurusan', authorization, getAverageNilaiJurusan)
router.post(
  '/tambahmahasiswa',
  authorization,
  isDosen,
  uploadFile,
  postDataMahasiswa
)

module.exports = router
