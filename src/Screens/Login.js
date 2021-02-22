import React from "react"
import { View, Button } from "react-native"
import { signInWithGoogle } from "../firebase"

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="loginWithGoogle" onPress={signInWithGoogle} />
    </View>
  )
}

export default Login
