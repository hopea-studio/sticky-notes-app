import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"
import { ScrollView, View } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
  Caption,
} from "react-native-paper"
import { signOut } from "../firebase"
import moment from "moment"

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
          left={() => (
            <Avatar.Image size={48} source={{ uri: user.photoURL }} />
          )}
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
              <Card.Title
                title={post.title}
                subtitle={post.user.displayName}
                left={() => (
                  <Avatar.Image
                    size={36}
                    source={{ uri: post.user.photoURL }}
                  />
                )}
              />
              <Card.Content>
                <Paragraph>
                  {post.content.slice(0, 100)} {"...."}
                </Paragraph>
                <Caption>
                  Created At: {moment(post.createdAt.toDate()).calendar()}
                </Caption>
              </Card.Content>
              <Card.Actions>
                <Button>
                  <Text>⭐️ {post.stars}</Text>
                </Button>
              </Card.Actions>
            </Card>
          )
        })}
    </ScrollView>
  )
}

export default Posts
