import * as React from "react"
import UsersProvider from "./src/providers/UsersProvider"
import App from "./src/index"
import PostsProvider from "./src/providers/PostsProvider"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    accent: "yellow",
  },
}

export default function Main() {
  return (
    <UsersProvider>
      <PostsProvider>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </PostsProvider>
    </UsersProvider>
  )
}
