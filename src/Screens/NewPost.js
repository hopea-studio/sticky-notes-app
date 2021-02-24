import React from "react"
import { useState } from "react"
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

const NewPost = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

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
      <TextInput label="title" />
      <TextInput label="content" multiline />
    </ScrollView>
  )
}

export default NewPost
