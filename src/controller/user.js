const bcrypt = require('bcrypt')
const helper = require('../helper/response')
const jwt = require('jsonwebtoken')
const { cekEmailUser, register, loginUser } = require('../model/user')

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password, role } = req.body
      const cekEmail = await cekEmailUser(email)
      if (email === null && password === null && role === null) {
        return helper.response(res, 400, 'All data must be field in!')
      } else {
        if (cekEmail.length > 0) {
          return helper.response(res, 400, 'Your email is already registered!')
        } else {
          const salt = bcrypt.genSaltSync(10)
          const encryptPassword = bcrypt.hashSync(password, salt)
          const setData = {
            email,
            password: encryptPassword,
            role
          }
          const result = await register(setData)
          return helper.response(res, 200, 'Success register', result)
        }
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      const cekDataUser = await loginUser(email)
      if (cekDataUser.length > 0) {
        const checkPassword = bcrypt.compareSync(
          password,
          cekDataUser[0].password
        )
        if (checkPassword) {
          const { ID, email, role } = cekDataUser[0]
          const payload = {
            ID,
            email,
            role
          }
          const token = jwt.sign(payload, 'RAHASIA', { expiresIn: '3h' })
          const result = { ...payload, token }
          return helper.response(res, 200, 'You are Loging in !', result)
        } else {
          return helper.response(res, 400, 'Password Incorrect !')
        }
      } else {
        return helper.response(res, 400, 'Email not registered !')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
