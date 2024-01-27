import { Notyf } from "notyf"

const notyf = new Notyf()

export function toastSuccess(message = "") {
  notyf.success(message)
}

export function toastError(message = "") {
  notyf.error(message)
}