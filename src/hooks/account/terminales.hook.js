import Axios from "../axios"

export const getTerminalesHook = async (query = "", page = 1) => {
  const URL = `/api/terminales/?page=${page}&query=${query}`
  const result = await Axios.get(URL)
  return result.data
}

export const createTerminalHook = async (data) => {
  const URL = "/api/terminales/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getTerminalHook = async (id) => {
  const URL = `/api/terminales/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateTerminalHook = async (id, data) => {
  const URL = `/api/terminales/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialTerminalHook = async (id, data) => {
  const URL = `/api/terminales/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteTerminalHook = async (id) => {
  const URL = `/api/terminales/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}