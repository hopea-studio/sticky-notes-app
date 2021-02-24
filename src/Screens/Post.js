import React from "react"
import { Paragraph, Card, Appbar, Text } from "react-native-paper"
import { ScrollView } from "react-native"

const Post = ({ route, navigation }) => {
  const post = route.params

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Appbar.Content title="Post" subtitle={`Id: ${post.id}`} />
      </Appbar.Header>
      <Card>
        <Card.Title title={post.title} />
        <Card.Content>
          <Paragraph>{post.content}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Text>⭐️ {post.stars}</Text>
        </Card.Actions>
      </Card>
    </ScrollView>
  )
}

export default Post
