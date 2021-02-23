import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"
import { ScrollView } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
} from "react-native-paper"
import { signOut } from "../firebase"

const Posts = () => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="Posts" subtitle={posts?.length} />
      </Appbar.Header>
      <Button mode="outlined" onPress={signOut}>
        <Text>Logout</Text>
      </Button>
      {user && <Text>{user.email}</Text>}

      {posts &&
        posts.map((post) => {
          return (
            <Card key={post.id}>
              <Card.Title title={post.title} />
              <Card.Content>
                <Paragraph>{post.content}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Text>⭐️ {post.stars}</Text>
              </Card.Actions>
            </Card>
          )
        })}
    </ScrollView>
  )
}

export default Posts
