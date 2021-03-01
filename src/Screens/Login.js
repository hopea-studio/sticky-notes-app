import React, { useState } from "react"
//import { signInWithGoogle } from "../firebase"
import { TextInput, Button, Appbar } from "react-native-paper"
import { ScrollView, StyleSheet, View } from "react-native"
import { auth } from "../firebase"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }

    setEmail("")
    setPassword("")
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Appbar.Content title="Login" />
      </Appbar.Header>

      <View style={styles.formContainer}>
        <TextInput
          autoCapitalize="none"
          label="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          autoCapitalize="none"
          label="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Login
        </Button>
      </View>
      {/* <Button title="loginWithGoogle" onPress={signInWithGoogle} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abd1c6",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 20,
    marginHorizontal: 40,
  },
  button: {
    marginHorizontal: 100,
  },
})

export default Login
