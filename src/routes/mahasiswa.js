const router = require('express').Router()
const { getDataMahasiswa } = require('../controller/mahasiswa')

router.get('/', getDataMahasiswa)

module.exports = router
