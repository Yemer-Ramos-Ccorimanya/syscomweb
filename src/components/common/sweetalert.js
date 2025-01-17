import Swal from "sweetalert2"

// confirmar borrar item.
export const deleteConfirm = async () => {
  return Swal.fire({
    title: `¿Estás seguro de borrar?`,
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, bórralo!",
    cancelButtonText: "Cancelar",
  })
}

// acceso denegado.
export const accessDenied = async () => {
  return Swal.fire(
    "Oops...",
    "Acceso denegado!",
    "error"
  )
}

// confirmar tarea a realizar.
export const confirmTask = async () => {
  return Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Aceptar",
    cancelButtonText: "Cancelar"
  })
}