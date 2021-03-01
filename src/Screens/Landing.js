import React from "react"
import { ScrollView, StyleSheet, View, Image } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
  Title,
  Headline,
} from "react-native-paper"
import logo from "../images/logo.png"

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar></Appbar>
      <View style={styles.title}>
        <Headline style={styles.titleText}>Sticky Notes</Headline>
      </View>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
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
    paddingVertical: 50,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
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
  logoContainer: { alignItems: "center" },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
})
