import React from "react"
import {
  Container,
  Content,
  Input,
  Item,
  Form,
  Button,
  Text,
} from "native-base"
import { useState } from "react"
import { auth } from "../firebase"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
    } catch (error) {
      console.log(error)
    }

    setDisplayName("")
    setEmail("")
    setPassword("")
  }

  return (
    <Container>
      <Content>
        <Form>
          <Item regular>
            <Input
              autoCapitalize="none"
              placeholder="display name"
              value={displayName}
              onChangeText={(text) => setDisplayName(text)}
            />
          </Item>
          <Item regular>
            <Input
              autoCapitalize="none"
              placeholder="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Item>
          <Item regular>
            <Input
              autoCapitalize="none"
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </Item>
          <Button onPress={handleSubmit}>
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}

export default Register
