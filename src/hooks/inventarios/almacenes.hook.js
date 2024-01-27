import Axios from "../axios"

export const getAlmacenesHook = async (query = "", page = 1) => {
  const URL = `/api/inventarios/almacenes?page=${page}&query=${query}`
  const result = await Axios.get(URL)
  return result.data
}

export const createAlmacenHook = async (data) => {
  const URL = "/api/inventarios/almacenes"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getAlmacenHook = async (id) => {
  const URL = `/api/inventarios/almacenes/${id}`
  const result = await Axios.get(URL)
  return result.data
}

export const updateAlmacenHook = async (id, data) => {
  const URL = `/api/inventarios/almacenes/${id}`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialAlmacenHook = async (id, data) => {
  const URL = `/api/inventarios/almacenes/${id}`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteAlmacenHook = async (id) => {
  const URL = `/api/inventarios/almacenes/${id}`
  const result = await Axios.delete(URL)
  return result.data
}