const connection = require('../config/mysql')

module.exports = {
  cekEmailUser: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE email = ?',
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  register: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            ID: result.insertId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  loginUser: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT ID, email, password, role FROM user WHERE email = ?',
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
