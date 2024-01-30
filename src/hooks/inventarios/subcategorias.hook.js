import Axios from "../axios"

export const getSubCategoriasHook = async (query = "", page = 1) => {
  const URL = `/api/inventarios/subcategorias/?page=${page}&query=${query}`
  const result = await Axios.get(URL)
  return result.data
}

export const getSubCategoriasByCategoriaHook = async (id) => {
  const URL = `/api/inventarios/subcategorias/${id}/listar`
  const result = await Axios.get(URL)
  return result.data
}

export const createSubCategoriaHook = async (data) => {
  const URL = "/api/inventarios/subcategorias/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getSubCategoriaHook = async (id) => {
  const URL = `/api/inventarios/subcategorias/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateSubCategoriaHook = async (id, data) => {
  const URL = `/api/inventarios/subcategorias/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialSubCategoriaHook = async (id, data) => {
  const URL = `/api/inventarios/subcategorias/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteSubCategoriaHook = async (id) => {
  const URL = `/api/inventarios/subcategorias/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}
