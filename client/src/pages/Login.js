import React, { useState } from "react"
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../utils/mutations"
import Auth from "../utils/auth"
// import { Link } from "react-router-dom"

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" })
  const [login, { error }] = useMutation(LOGIN_USER)

  
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      })
      const token = mutationResponse.data.login.token
      Auth.login(token)
    
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
        <Header as="h2" color="yellow" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="email"
              placeholder="E-mail address"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
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
            <Button color="yellow" fluid size="large" type="submit">
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