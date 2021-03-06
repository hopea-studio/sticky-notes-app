import React from "react"
import { Paragraph, Card, Text, Avatar, Caption } from "react-native-paper"
import { StyleSheet } from "react-native"
import moment from "moment"

const PostCard = ({ post, navigation, slicedContent, nav }) => {
  return (
    <Card style={styles.card} onPress={() => nav && nav(navigation, post.id)}>
      <Card.Title
        title={post.title}
        subtitle={post.user.displayName}
        left={() => (
          <Avatar.Image size={36} source={{ uri: post.user.photoURL }} />
        )}
      />
      <Card.Content>
        <Paragraph>
          {post.content.slice(0, slicedContent)}{" "}
          {post.content.length > slicedContent && slicedContent && "......"}
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

export default PostCard
