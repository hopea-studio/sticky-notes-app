import React, { useContext } from "react"
import { Card, Appbar, Button, TextInput } from "react-native-paper"
import { ScrollView } from "react-native"
import { useEffect } from "react"
import { useState } from "react"
import { firestore } from "../firebase"

import PostCard from "../components/PostCard"
import CommentCard from "../components/CommentCard"
import { userContext } from "../providers/UsersProvider"

const Post = ({ route, navigation }) => {
  const { id } = route.params
  const { user } = useContext(userContext)
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState("")

  const postRef = firestore.doc(`posts/${id}`)
  const commentsRef = postRef.collection("comments")

  const docsWithId = (doc) => {
    return { id: doc.id, ...doc.data() }
  }

  const addComment = (comment) => {
    commentsRef.add({
      ...comment,
      user,
    })
  }

  const handleSumbitComment = () => {
    addComment({ content: comment, createdAt: new Date() })
    setComment("")
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
          <Appbar.Content title="Post" subtitle={post.title} />
        </Appbar.Header>
        <PostCard post={post} />

        <Card>
          <Card.Title title="Comments" />
          <Card.Content>
            {comments.map((comment) => {
              return <CommentCard comment={comment} key={comment.id} />
            })}
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <TextInput
              label="New Comment"
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
          </Card.Content>
          <Card.Actions>
            <Button onPress={handleSumbitComment}>Submit</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    )
  )
}

export default Post
