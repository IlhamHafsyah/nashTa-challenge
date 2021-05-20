const {
  postingNilai,
  cekNimMahasiswa,
  cekIdMataKuliah,
  editNilai,
  deletingNilai
} = require('../model/nilai')
const helper = require('../helper/response')

module.exports = {
  postNilai: async (req, res) => {
    try {
      const { nim, idMataKuliah, idDosen, nilai } = req.body
      const cekNim = await cekNimMahasiswa(nim)
      const cekMataKuliah = await cekIdMataKuliah(idMataKuliah)
      const keterangan = nilai > 60 ? 'Lulus' : 'Tidak Lulus'
      if (nilai < 100 && nilai > 0) {
        const setData = {
          nim,
          idMataKuliah,
          idDosen,
          nilai,
          keterangan
        }
        if (cekNim.length > 0 && cekMataKuliah.length > 0) {
          const result = await postingNilai(setData)
          return helper.response(
            res,
            200,
            `Success post nilai untuk mahasiswa dengan NIM ${nim}`,
            result
          )
        } else {
          return helper.response(res, 400, 'Tolong masukkan data dengan benar!')
        }
      } else {
        return helper.response(res, 400, 'Nilai harus dalam rentang 0 - 100')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  putNilai: async (req, res) => {
    try {
      const { nilai, idMataKuliah, idDosen } = req.body
      const { id } = req.params
      const cekNim = await cekNimMahasiswa(id)
      const cekMataKuliah = await cekIdMataKuliah(idMataKuliah)
      const keterangan = nilai > 60 ? 'Lulus' : 'Tidak Lulus'
      if (nilai < 100 && nilai > 0) {
        const setData = {
          id,
          idMataKuliah,
          nilai,
          idDosen,
          keterangan
        }
        if (cekNim.length > 0 && cekMataKuliah.length > 0) {
          const result = await editNilai(setData)
          return helper.response(
            res,
            200,
            `Success edit nilai untuk mahasiswa dengan NIM ${id}`,
            result
          )
        } else {
          return helper.response(res, 400, 'Tolong masukkan data dengan benar!')
        }
      } else {
        return helper.response(res, 400, 'Nilai harus dalam rentang 0 - 100')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteNilai: async (req, res) => {
    try {
      const { nim, idMataKuliah } = req.body
      const cekNim = await cekNimMahasiswa(nim)
      const cekMataKuliah = await cekIdMataKuliah(idMataKuliah)
      if (cekNim.length > 0 && cekMataKuliah.length > 0) {
        const result = await deletingNilai(nim, idMataKuliah)
        console.log(result)
        return helper.response(
          res,
          200,
          `Berhasil menghapus data nilai mahasiswa dengan nim ${nim} untuk mata kuliah dengan id ${idMataKuliah}`
        )
      } else {
        return helper.response(res, 404, 'data nilai tidak ditemukan!')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}
