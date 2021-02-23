import React, { useState } from "react"
//import { signInWithGoogle } from "../firebase"
import {
  Container,
  Content,
  Input,
  Item,
  Form,
  Button,
  Text,
} from "native-base"
import { auth } from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }

    setEmail("")
    setPassword("")
  }

  return (
    <Container style={{ flex: 1, justifyContent: "center" }}>
      <Content>
        <Form>
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
            <Text>Login</Text>
          </Button>
        </Form>
      </Content>

      {/* <Button title="loginWithGoogle" onPress={signInWithGoogle} /> */}
    </Container>
  )
}

export default Login
