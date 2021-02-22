import React, { useContext } from "react"
import { View, Text } from "react-native"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"

const Posts = () => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)

  return (
    <View>
      <Text>{user.email}</Text>
    </View>
  )
}

export default Posts
