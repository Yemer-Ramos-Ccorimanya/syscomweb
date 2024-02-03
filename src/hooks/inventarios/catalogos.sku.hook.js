import Axios from "../axios"

export const getCatalogoSkusHook = async (query = "", estado = "HABILITADO", page = 1, page_size = 12) => {
  const URL = `/api/inventarios/catalogos-sku/?page=${page}&page_size=${page_size}&query=${query}&estado=${estado}`
  const result = await Axios.get(URL)
  return result.data
}

export const createCatalogoSkuHook = async (data) => {
  const URL = "/api/inventarios/catalogos-sku/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getCatalogoSkuHook = async (id) => {
  const URL = `/api/inventarios/catalogos-sku/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateCatalogoSkuHook = async (id, data) => {
  const URL = `/api/inventarios/catalogos-sku/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialCatalogoSkuHook = async (id, data) => {
  const URL = `/api/inventarios/catalogos-sku/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteCatalogoSkuHook = async (id) => {
  const URL = `/api/inventarios/catalogos-sku/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}