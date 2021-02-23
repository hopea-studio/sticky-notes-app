import React, { useState } from "react"
//import { signInWithGoogle } from "../firebase"
import { TextInput, Button } from "react-native-paper"
import { ScrollView } from "react-native"
import { auth } from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }

    setEmail("")
    setPassword("")
  }

  return (
    <ScrollView>
      <TextInput
        autoCapitalize="none"
        label="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        autoCapitalize="none"
        label="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={handleSubmit}>Login</Button>

      {/* <Button title="loginWithGoogle" onPress={signInWithGoogle} /> */}
    </ScrollView>
  )
}

export default Login
