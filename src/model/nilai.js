const connection = require('../config/mysql')

module.exports = {
  cekNimMahasiswa: (nim) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM mahasiswa WHERE nim = ?',
        nim,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  cekIdMataKuliah: (idMataKuliah) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM matakuliah WHERE idMataKuliah = ?',
        idMataKuliah,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postingNilai: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO datanilai SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  editNilai: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE datanilai SET nilai = ? WHERE nim = ?',
        [setData.nilai, setData.id],
        (error, result) => {
          if (!error) {
            const newResult = {
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  deletingNilai: (nim, idMataKuliah) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM datanilai WHERE nim = ? AND idMataKuliah = ?',
        [nim, idMataKuliah],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
