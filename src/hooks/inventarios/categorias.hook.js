import Axios from "../axios"

export const getCategoriasHook = async (query = "", page = 1) => {
  const URL = `/api/inventarios/categorias?page=${page}&query=${query}`
  const result = await Axios.get(URL)
  return result.data
}

export const createCategoriaHook = async (data) => {
  const URL = "/api/inventarios/categorias"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getCategoriaHook = async (id) => {
  const URL = `/api/inventarios/categorias/${id}`
  const result = await Axios.get(URL)
  return result.data
}

export const updateCategoriaHook = async (id, data) => {
  const URL = `/api/inventarios/categorias/${id}`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialCategoriaHook = async (id, data) => {
  const URL = `/api/inventarios/categorias/${id}`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteCategoriaHook = async (id) => {
  const URL = `/api/inventarios/categorias/${id}`
  const result = await Axios.delete(URL)
  return result.data
}