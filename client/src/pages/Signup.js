import React, { useState } from "react"
// import { Link } from "react-router-dom"
import { Button, Form, Input, Grid, Header, Message } from "semantic-ui-react"
import { useMutation } from "@apollo/client"
import Auth from "../utils/auth"
import { ADD_USER } from "../utils/mutations"

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" })
  const [addUser] = useMutation(ADD_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        username: formState.username
      },
    })
    const token = mutationResponse.data.addUser.token
    Auth.login(token)
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
        <Header as="h2" color="green" textAlign="center">
          Sign up
        </Header>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="First name"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field
            id="form-input-control-error-username"
            control={Input}
            label="Username"
            name="username"
            placeholder="user name"
            onChange={handleChange}
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            name="email"
            placeholder="joe@schmoe.com"
            onChange={handleChange}
          />

          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            color='green'
            content="Sign up!"
            type="submit"
          />
        </Form>
        <Message>
          Have an account? <a href="/login">Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Signup