import * as React from "react"
import UsersProvider from "./src/providers/UsersProvider"
import App from "./src/index"
import PostsProvider from "./src/providers/PostsProvider"

export default function Main() {
  return (
    <UsersProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UsersProvider>
  )
}
