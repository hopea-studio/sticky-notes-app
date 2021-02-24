import React from "react"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
} from "react-native-paper"
import { ScrollView } from "react-native"

//const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"

const Post = ({ navigation }) => {
  const post = route.params
  //console.log(post)
  return (
    <ScrollView>
      <Appbar.Header>
        {/* <Appbar.Action
          icon="home"
          onPress={() => {
            navigation.navigate("Posts")
          }}
        /> */}
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
