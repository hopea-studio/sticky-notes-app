import React, { useState, useEffect, createContext } from "react"
import { auth, createUserProfileDocument } from "../firebase"
import * as GoogleSignIn from "expo-google-sign-in"

export const userContext = createContext()

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync()
      const { type, user } = await GoogleSignIn.signInAsync()

      if (type === "success") {
        syncUserWithState()
      }
    } catch ({ message }) {
      alert("login: Error:" + message)
    }
  }

  const syncUserWithState = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync()

    setUser({ user })
  }

  const initAsync = async () => {
    await GoogleSignIn.initAsync()
    syncUserWithState()
  }

  const loginWithGoogle = () => {
    signInAsync()
  }

  // useEffect(() => {
  //   initAsync()
  // }, [])

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth).then((userRef) => {
          userRef.onSnapshot((snapshot) => {
            setUser({ uid: snapshot.id, ...snapshot.data() })
          })
        })
      }
      setUser(userAuth)
    })

    return () => unsubsribe()
  }, [])

  return (
    <userContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </userContext.Provider>
  )
}

export default UsersProvider
