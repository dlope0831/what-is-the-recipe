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
<<<<<<< HEAD:client/src/components/Footer.js
        <Container textAlign="center" stackable className="footerContainer"> 
=======
        <Container textAlign="center" stackable= "true">
>>>>>>> 3c2a49c16aaac32e9ae1c456f808c4e422958b52:client/src/pages/Footer.js
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
