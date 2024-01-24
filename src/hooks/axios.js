import axios from "axios"

const configUrl = {
  development: "http://127.0.0.1:8000",
  production: "-",
}

const baseURL = configUrl.development

export const instance = axios.create({baseURL,})

// Añadir un interceptor para agregar el token de acceso a cada solicitud
instance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("AuthToken")

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Añadir un interceptor para manejar respuestas no autorizadas (401)
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Si la respuesta es 401 y es una solicitud original (no un intento de renovación)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const response = await instance.post("/api/account/token/refresh/", {
          refresh: localStorage.getItem("RefreshToken"),
        })

        const newAccessToken = response.data.access
        localStorage.setItem("AuthToken", newAccessToken)

        // Vuelve a intentar la solicitud original con el nuevo token de acceso
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
        return instance(originalRequest)
      } catch (refreshError) {
        // Si la renovación del token también falla, redirige a la página de inicio de sesión
        localStorage.removeItem("AuthToken")
        localStorage.removeItem("RefreshToken")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)

export default instance
