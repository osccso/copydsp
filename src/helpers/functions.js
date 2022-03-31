import axios from "axios"

export const getData = async (url) => {
  axios.get(url)
  .then(resp => {
    const data =resp.data
    console.log(data)
    return data
  })
}