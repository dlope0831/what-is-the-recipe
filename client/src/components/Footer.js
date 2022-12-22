import React from "react"
import { Segment, List, Container, Button } from "semantic-ui-react"

function Footer() {

  // const donationLink = () => {
  //   window.location.assign('/donate')
  // }

  return (
    <div className="footer">
      <Segment
        inverted
        vertical
      >
        <Container textAlign="center" className="footerContainer"> 
          <List horizontal inverted divided link  size="small">
            <List.Item as="a" href="https://github.com/dlope0831">
              Daniela
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
          <Button compact animated="fade" floated='right'>
          <Button.Content visible>Donate to us!</Button.Content>
          <Button.Content hidden>
            Click here 
          </Button.Content>
        </Button>
        </Container>

      </Segment>
    </div>
  )
}

export default Footer
