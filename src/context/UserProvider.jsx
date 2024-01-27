import { createContext, useEffect, useState } from "react"
import { getUserDataHook } from "../hooks/account"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    if (localStorage.getItem("AuthToken")) {
      getUserDataHook().then(result => {
        setUserData(result)
      })
    }
  }, [getUserDataHook])

  return (
    <UserContext.Provider value={{
      userData,
    }}>
      {children}
    </UserContext.Provider>
  )
}