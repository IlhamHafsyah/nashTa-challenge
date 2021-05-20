const connection = require('../config/mysql')

module.exports = {
  getMahasiswa: (jurusan, dosen, namaMataKuliah, sort) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT mahasiswa.nim, mahasiswa.nama, alamat, tanggalLahir, jurusan, TIMESTAMPDIFF(YEAR, tanggalLahir, CURDATE()) AS umur, dosen.nama AS dosen, namaMataKuliah, nilai
        FROM mahasiswa
        JOIN matakuliah ON mahasiswa.nim = matakuliah.nim
        JOIN datanilai ON datanilai.nim = matakuliah.nim
        JOIN dosen ON dosen.idDosen = datanilai.idDosen
        WHERE jurusan LIKE '%${jurusan}%'
        AND dosen.nama LIKE '%${dosen}%'
        AND namaMataKuliah LIKE '%${namaMataKuliah}%'
        ORDER BY ${sort}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getAverageMahasiswa: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT mahasiswa.nama, AVG(nilai) AS nilai_rata_rata FROM datanilai JOIN mahasiswa ON datanilai.nim = mahasiswa.nim GROUP BY datanilai.nim',
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
