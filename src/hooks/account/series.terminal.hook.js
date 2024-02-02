import Axios from "../axios"

export const getSeriesTerminalHook = async () => {
  const URL = `/api/account/series-terminal/`
  const result = await Axios.get(URL)
  return result.data
}

export const createSerieTerminalHook = async (data) => {
  const URL = "/api/account/series-terminal/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getSerieTerminalHook = async (id) => {
  const URL = `/api/account/series-terminal/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateSerieTerminalHook = async (id, data) => {
  const URL = `/api/account/series-terminal/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialSerieTerminalHook = async (id, data) => {
  const URL = `/api/account/series-terminal/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteSerieTerminalHook = async (id) => {
  const URL = `/api/account/series-terminal/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}