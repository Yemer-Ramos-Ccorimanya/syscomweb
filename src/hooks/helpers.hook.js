export function formatearNumero(numero) {
  // Verificar si el número es válido
  if (isNaN(numero)) {
    return "Número no válido"
  }

  // Redondear a dos decimales
  const numeroRedondeado = Number(numero).toFixed(2)

  // Agregar separación de miles
  const partes = numeroRedondeado.toString().split(".")
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  // Unir las partes y devolver el resultado
  return partes.join(".")
}