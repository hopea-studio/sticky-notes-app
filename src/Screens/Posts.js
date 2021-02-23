import React, { useContext } from "react"
import { postsContext } from "../providers/PostsProvider"
import { userContext } from "../providers/UsersProvider"
import {
  Container,
  Content,
  Input,
  Item,
  Form,
  Button,
  Text,
  Header,
  Body,
  Title,
} from "native-base"
import { auth, signOut } from "../firebase"

const Posts = () => {
  const posts = useContext(postsContext)
  const user = useContext(userContext)

  return (
    <Container>
      <Header>
        <Body>
          <Title>Posts</Title>
        </Body>
      </Header>
      <Button onPress={signOut}>
        <Text>Logout</Text>
      </Button>
      {user && <Text>{user.email}</Text>}
    </Container>
  )
}

export default Posts
