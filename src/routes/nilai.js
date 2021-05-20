const router = require('express').Router()
const { postNilai, putNilai, deleteNilai } = require('../controller/nilai')
const { authorization, isDosen } = require('../auth/auth')

router.post('/post', authorization, isDosen, postNilai)
router.put('/edit', authorization, isDosen, putNilai)
router.delete('/delete', authorization, isDosen, deleteNilai)

module.exports = router
