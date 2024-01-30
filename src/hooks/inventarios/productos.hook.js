import Axios from "../axios"

export const getProductosHook = async (query = "", page = 1) => {
  const URL = `/api/inventarios/productos/?page=${page}&query=${query}`
  const result = await Axios.get(URL)
  return result.data
}

export const createProductoHook = async (data) => {
  const URL = "/api/inventarios/productos/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getProductoHook = async (id) => {
  const URL = `/api/inventarios/productos/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateProductoHook = async (id, data) => {
  const URL = `/api/inventarios/productos/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialProductoHook = async (id, data) => {
  const URL = `/api/inventarios/productos/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteProductoHook = async (id) => {
  const URL = `/api/inventarios/productos/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}