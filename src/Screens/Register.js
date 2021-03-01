import React from "react"
import { TextInput, Button, Appbar } from "react-native-paper"
import { ScrollView, View, StyleSheet } from "react-native"
import { useState } from "react"
import { auth, createUserProfileDocument } from "../firebase"

const Register = ({ navigation }) => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.log(error)
    }

    setDisplayName("")
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
        <Appbar.Content title="Register" />
      </Appbar.Header>
      <View style={styles.formContainer}>
        <TextInput
          autoCapitalize="none"
          label="display name"
          value={displayName}
          placeholder="Type something"
          onChangeText={(text) => setDisplayName(text)}
          style={styles.input}
        />

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
          Register
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
  },
})

export default Register
