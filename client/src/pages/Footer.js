import React from "react"
import {Segment, List, Container } from "semantic-ui-react"

function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "28em 0em 0em", padding: "2em " }}
    >
      <Container textAlign="center" className="">
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="https://github.com/dlope0831">
            Daniella
          </List.Item>
          <List.Item as="a" href="https://github.com/ConnieMarie">
            Connie
          </List.Item>
          <List.Item as="a" href="https://github.com/jenireeac">
            Jeniree
          </List.Item>
          <List.Item as="a" href="https://github.com/shanicesauce">
            Shanice
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default Footer


