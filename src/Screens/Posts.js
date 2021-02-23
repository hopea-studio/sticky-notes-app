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

const Posts = ({ navigation }) => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content
          title="Posts"
          subtitle={`post number: ${posts?.length}`}
        />
      </Appbar.Header>
      {user && (
        <Card.Title
          title={user.displayName}
          subtitle={user.email}
          left={() => <Avatar.Image size={48} source={user.photoURL} />}
          right={() => (
            <Button mode="outlined" onPress={signOut}>
              Logout
            </Button>
          )}
        />
      )}
      {posts &&
        posts.map((post) => {
          return (
            <Card
              key={post.id}
              onPress={() => navigation.navigate("Post", post)}
            >
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
