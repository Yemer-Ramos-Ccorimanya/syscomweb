import Axios from "./axios.js"

export const registerUserHook = async (data) => {
  const URL = "/api/account/register/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const authLoginHook = async ({username, password}) => {
  const URL = "/api/account/login/"
  const data = {username, password}
  const result = await Axios.post(URL, data)
  return result.data
}

export const refreshTokenHook = async () => {
  const URL = "/api/account/token/refresh/"
  const result = await Axios.post(URL, {refresh: localStorage.getItem("RefreshToken")})
  return result.data
}
