import Axios from "../axios"

export const getUserEmpresasHook = async () => {
  const URL = `/api/user-empresas/`
  const result = await Axios.get(URL)
  return result.data
}

export const createUserEmpresaHook = async (data) => {
  const URL = "/api/user-empresas/"
  const result = await Axios.post(URL, data)
  return result.data
}

export const getUserEmpresaHook = async (id) => {
  const URL = `/api/user-empresas/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateUserEmpresaHook = async (id, data) => {
  const URL = `/api/user-empresas/${id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialUserEmpresaHook = async (id, data) => {
  const URL = `/api/user-empresas/${id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteUserEmpresaHook = async (id) => {
  const URL = `/api/user-empresas/${id}/`
  const result = await Axios.delete(URL)
  return result.data
}