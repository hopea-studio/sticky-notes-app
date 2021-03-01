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
import PostCard from "../components/PostCard"

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
            <PostCard
              post={post}
              key={post.id}
              navigation={navigation}
              slicedContent={50}
            />
          )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#abd1c6" },
})

export default Posts
