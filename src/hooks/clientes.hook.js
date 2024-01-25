import { Axios } from "axios"


export const listarClientesHook = async (page = 1) => {
  const URL = `/api/clientes/?page=${page}`
  const result = await Axios.get(URL)
  return result.data
}


export const createClienteHook = async (data) => {
  const URL = "/api/clientes/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getClienteHook = async (id) => {
  const URL = `/api/clientes/${id}`
  const result = await Axios.get(URL)
  return result.data
}

export const updateClienteHook = async (id, data) => {
  const URL = `/api/clientes/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialClienteHook = async (id, data) => {
  const URL = `/api/clientes/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteClienteHook = async (id) => {
  const URL = `/api/clientes/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}