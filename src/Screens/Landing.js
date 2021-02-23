import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
  Title,
} from "react-native-paper"

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar></Appbar>
      <View style={styles.title}>
        <Title>The Secret Cellar</Title>
      </View>
      <View style={styles.body}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>
      <Appbar style={styles.bottom}></Appbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abd1c6",
  },
  title: {
    alignItems: "center",
  },
  body: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    marginHorizontal: 10,
  },
})
