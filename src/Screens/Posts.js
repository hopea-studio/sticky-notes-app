import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"
import { ScrollView, StyleSheet } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
  Caption,
} from "react-native-paper"
import moment from "moment"

const Posts = ({ navigation }) => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Action
          icon="pencil"
          onPress={() => navigation.navigate("NewPost")}
        />
        <Appbar.Content
          title="Posts"
          subtitle={`post number: ${posts?.length}`}
        />
        <Appbar.Action
          icon="account"
          onPress={() => navigation.navigate("Account")}
        />
      </Appbar.Header>
      {posts &&
        posts.map((post) => {
          return (
            <Card
              key={post.id}
              style={styles.card}
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
              <Card.Actions style={styles.actions}>
                <Text>⭐️ {post.stars}</Text>
                <Text>Comments: {post.comments}</Text>
              </Card.Actions>
            </Card>
          )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#abd1c6" },
  card: {
    margin: 5,
    backgroundColor: "#ffee58",
  },
  actions: {
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
})

export default Posts
