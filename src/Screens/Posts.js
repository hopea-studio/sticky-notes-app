import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { ScrollView, StyleSheet } from "react-native"
import { Appbar } from "react-native-paper"
import PostCard from "../components/PostCard"

const Posts = ({ navigation }) => {
  const posts = useContext(postsContext)

  const navToPage = (navigation, id) => {
    navigation.navigate("Post", { id: id })
  }

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.Action
          icon="pencil"
          onPress={() => navigation.navigate("NewPost")}
        />
        <Appbar.Content
          title="Posts"
          subtitle={`Posts number: ${posts?.length}`}
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
              nav={navToPage}
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
