import Axios from "../axios"

export const getCatalogoSkusAlmacenHook = async (id) => {
  const URL = `/api/inventarios/catalogos-sku-almacen/${id}/`
  const result = await Axios.get(URL)
  return result.data
}

export const createCatalogoSkuAlmacenHook = async (id, data) => {
  const URL = `/api/inventarios/catalogos-sku-almacen/${id}/`
  const result = await Axios.post(URL, data)
  return result.data
}