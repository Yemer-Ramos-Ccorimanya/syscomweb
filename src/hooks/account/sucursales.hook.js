import Axios from "../axios"

export const getSucursalesHook = async (pk) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/`
  const result = await Axios.get(URL)
  return result.data
}

export const createSucursalHook = async (pk, data) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/`
  const result = await Axios.post(URL, data)
  return result.data
}

export const getSucursalHook = async (pk, sucursal_id) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/${sucursal_id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const updateSucursalHook = async (pk, sucursal_id, data) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/${sucursal_id}/`
  const result = await Axios.put(URL, data)
  return result.data
}

export const updatePartialSucursalaHook = async (pk, sucursal_id, data) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/${sucursal_id}/`
  const result = await Axios.patch(URL, data)
  return result.data
}

export const deleteSucursalHook = async (pk, sucursal_id) => {
  const URL = `/api/account/user-empresas/${pk}/sucursales/${sucursal_id}/`
  const result = await Axios.delete(URL)
  return result.data
}