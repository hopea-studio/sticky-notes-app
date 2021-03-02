import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { userContext } from "../providers/UsersProvider"
import { Avatar, Button, Appbar, Headline } from "react-native-paper"
import { signOut } from "../firebase"

const Account = ({ navigation }) => {
  const user = useContext(userContext)
  return (
    user && (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Action
            icon="arrow-left"
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Appbar.Content title="Account" />
        </Appbar.Header>
        <View style={styles.body}>
          <Avatar.Image size={128} source={{ uri: user.photoURL }} />
          <Headline>{user.displayName}</Headline>
          <View style={styles.buttons}>
            <Button style={styles.button} mode="contained" onPress={signOut}>
              Logout
            </Button>
            <Button style={styles.button} mode="contained" onPress={signOut}>
              Edit
            </Button>
          </View>
        </View>
        <Appbar style={styles.bottom}></Appbar>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abd1c6",
    paddingVertical: 40,
  },
  body: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
  },
})

export default Account
