import React from "react"
import { useState, useContext } from "react"
import { ScrollView, StyleSheet } from "react-native"
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  Appbar,
  Text,
  Caption,
  Headline,
  TextInput,
} from "react-native-paper"
import { firestore } from "../firebase"
import { userContext } from "../providers/UsersProvider"

const NewPost = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const user = useContext(userContext)

  const handleSubmit = () => {
    const post = {
      title,
      content,
      user,
      stars: 0,
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    firestore.collection("posts").add(post)
    setTitle("")
    setContent("")
    navigation.navigate("Posts")
  }

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Appbar.Content title="New Post" />
      </Appbar.Header>
      <Headline>New Post</Headline>
      <TextInput
        label="title"
        value={title}
        autoCapitalize="none"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        label="content"
        value={content}
        autoCapitalize="none"
        onChangeText={(text) => setContent(text)}
        multiline
      />
      <Button onPress={handleSubmit}>Add</Button>
    </ScrollView>
  )
}

export default NewPost
