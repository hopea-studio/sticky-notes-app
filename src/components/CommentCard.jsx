import React from "react"
import {
  Paragraph,
  Card,
  Appbar,
  Text,
  List,
  Avatar,
  Title,
  Caption,
} from "react-native-paper"
import moment from "moment"

const CommentCard = ({ comment }) => {
  return (
    <List.Item
      key={comment.id}
      title={comment.content}
      description={
        comment.createdAt && moment(comment.createdAt.toDate()).calendar()
      }
      left={() => (
        <Avatar.Image size={36} source={{ uri: comment.user.photoURL }} />
      )}
    />
  )
}

export default CommentCard
