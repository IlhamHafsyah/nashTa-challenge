const convertInt = (int) => {
  const jam = Math.floor(int / 3600)
  const menit = Math.floor((int % 3600) / 60)
  const detik = int % 60
  return `${jam} Jam ${menit} Menit ${detik} Detik`
}

console.log(convertInt(10000))
