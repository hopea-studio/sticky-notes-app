import * as React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { userContext } from "./providers/UsersProvider"
import { useContext } from "react"

import LandingScreen from "./Screens/Landing"
import LoginScreen from "./Screens/Login"
import PostsScreen from "./Screens/Posts"
import RegisterScreen from "./Screens/Register"
import PostScreen from "./Screens/Post"

//import { Appbar } from "react-native-paper"

const Stack = createStackNavigator()

export default function App() {
  const user = useContext(userContext)

  if (!user) {
    return (
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      //headerMode="screen"
      initialRouteName="Posts"
      // screenOptions={{
      //   header: ({ navigation, scene, previous }) => {
      //     return (
      //       <Appbar.Header>
      //         {previous && (
      //           <Appbar.BackAction onPress={() => navigation.goBack()} />
      //         )}
      //         <Appbar.Action
      //           icon="home"
      //           onPress={() => {
      //             navigation.navigate("Posts")
      //           }}
      //         />
      //         <Appbar.Content title={scene.descriptor.options.title} />
      //       </Appbar.Header>
      //     )
      //   },
      // }}
    >
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false, title: "Posts" }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false, title: "Post" }}
      />
    </Stack.Navigator>
  )
}
