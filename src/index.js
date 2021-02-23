import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { userContext } from "./providers/UsersProvider"
import { useContext } from "react"

import LandingScreen from "./Screens/Landing"
import LoginScreen from "./Screens/Login"
import PostsScreen from "./Screens/Posts"
import RegisterScreen from "./Screens/Register"

const Stack = createStackNavigator()

export default function App() {
  const user = useContext(userContext)

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
