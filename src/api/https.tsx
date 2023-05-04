import data from '../../public/data.json'
const fetchData = async () => {
  const datas = await data
  return datas
}

export default fetchData

// const fetchData = async () => {
//   const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=3e3e52979f2d749b0f8f4a41510674e0')
//   const data = response.json()
//   return data
// }

// export default fetchData
