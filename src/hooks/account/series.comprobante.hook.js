import Axios from "../axios"

export const getSeriesComprobanteHook = async () => {
  const URL = `/api/series-comprobante/`
  const result = await Axios.get(URL)
  return result.data
}

export const createSerieComprobanteHook = async (data) => {
  const URL = "/api/series-comprobante/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getSerieComprobanteHook = async (id) => {
  const URL = `/api/series-comprobante/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateSerieComprobanteHook = async (id, data) => {
  const URL = `/api/series-comprobante/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialSerieComprobanteHook = async (id, data) => {
  const URL = `/api/series-comprobante/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteSerieComprobanteHook = async (id) => {
  const URL = `/api/series-comprobante/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}