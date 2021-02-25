import React from "react"
import { Paragraph, Card, Appbar, Text, List, Avatar } from "react-native-paper"
import { ScrollView } from "react-native"
import { useEffect } from "react"
import { useState } from "react"
import { firestore } from "../firebase"

const Post = ({ route, navigation }) => {
  const { id } = route.params

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  const postRef = firestore.doc(`posts/${id}`)
  const commentsRef = postRef.collection("comments")

  const docsWithId = (doc) => {
    return { id: doc.id, ...doc.data() }
  }

  useEffect(() => {
    const unsubscribeFromPost = postRef.onSnapshot((snapshot) => {
      const post = docsWithId(snapshot)
      setPost(post)
    })

    return () => unsubscribeFromPost()
  }, [])

  useEffect(() => {
    const unsubscribeFromComments = commentsRef.onSnapshot((snapshot) => {
      const comments = snapshot.docs.map(docsWithId)
      setComments(comments)
    })

    return () => unsubscribeFromComments()
  }, [])

  return (
    post && (
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
            <Text>⭐️ {post.stars}</Text>
            <Paragraph>{post.content}</Paragraph>
          </Card.Content>
          <Card.Content>
            {comments.map((comment) => {
              console.log(comment)
              return (
                <List.Item
                  key={comment.id}
                  title={comment.content}
                  left={() => (
                    <Avatar.Image
                      size={36}
                      source={{ uri: comment.user.photoURL }}
                    />
                  )}
                />
              )
            })}
          </Card.Content>
        </Card>
      </ScrollView>
    )
  )
}

export default Post
