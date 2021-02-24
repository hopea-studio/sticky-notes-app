import * as React from "react"
import UsersProvider from "./src/providers/UsersProvider"
import App from "./src/index"
import PostsProvider from "./src/providers/PostsProvider"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"

const colorHue = {
  background: "#004643",
  headline: "#fffffe",
  paragraph: "#abd1c6",
  Button: "#f9bc60",
  ButtonText: "#001e1d",
  main: "#e8e4e6",
  stroke: "#001e1d",
  Tertiary: "#e16162",
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colorHue.background,
    accent: "yellow",
    background: colorHue.paragraph,
  },
}

export default function Main() {
  return (
    <NavigationContainer>
      <UsersProvider>
        <PostsProvider>
          <PaperProvider theme={theme}>
            <App />
          </PaperProvider>
        </PostsProvider>
      </UsersProvider>
    </NavigationContainer>
  )
}
