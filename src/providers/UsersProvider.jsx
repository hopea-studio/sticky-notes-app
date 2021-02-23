import React, { useState, useEffect, createContext } from "react"
import { auth } from "../firebase"

export const userContext = createContext()

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth)
    })

    return () => unsubsribe()
  }, [])

  return <userContext.Provider value={user}>{children}</userContext.Provider>
}

export default UsersProvider
