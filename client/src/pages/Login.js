import React, { useState } from "react"
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import { useMutation } from "@apollo/client"
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth"
// import { Link } from "react-router-dom"

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" })
  const [login, { error }] = useMutation(LOGIN)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      })
      const token = mutationResponse.data.login.token
      Auth.login(token)
      console.log(token);
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="pink" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <Button color="pink" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/signup">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login
