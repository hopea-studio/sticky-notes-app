import React from "react"
import { TextInput, Button } from "react-native-paper"
import { ScrollView } from "react-native"
import { useState } from "react"
import { auth } from "../firebase"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
    } catch (error) {
      console.log(error)
    }

    setDisplayName("")
    setEmail("")
    setPassword("")
  }

  return (
    <ScrollView>
      <TextInput
        autoCapitalize="none"
        label="display name"
        value={displayName}
        placeholder="Type something"
        onChangeText={(text) => setDisplayName(text)}
      />

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

      <Button onPress={handleSubmit}>Register</Button>
    </ScrollView>
  )
}

export default Register
