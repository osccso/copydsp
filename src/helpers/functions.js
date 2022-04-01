import axios from "axios"

export const getData = async (url) => {
  const resp =await fetch(url)
  console.log(resp);
  const data = await resp.json()
  console.log(data);
  return data
}