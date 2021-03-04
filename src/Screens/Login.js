import React, { useContext, useState } from "react"
import { signInWithGoogle } from "../firebase"
import { TextInput, Button, Appbar } from "react-native-paper"
import { StyleSheet, View, Image } from "react-native"
import { auth } from "../firebase"
import logo from "../images/logo.png"
import { userContext } from "../providers/UsersProvider"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loginWithGoogle } = useContext(userContext)

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
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
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
        <Button
          mode="contained"
          onPress={loginWithGoogle}
          style={styles.button}
        >
          Login with Google
        </Button>
      </View>
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
    marginVertical: 5,
  },
  logoContainer: { alignItems: "center", marginTop: 100 },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
})

export default Login
