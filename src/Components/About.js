import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const About = props => {

  return (
    <Modal show={props.show} onHide={props.handleClose} style={{ fontSize: "14px"}}>
      <Modal.Header closeButton>
        <Modal.Title>About This App (quick version)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          The idea for this app came about when I was playing some Halo 5. I noticed that one of the req cards
          contained an idiomatic grammar error. I thought to myself, "Halo is a multi-million dollar franchise, why are there not more 
          people checking for these errors?" It then occured to me that they might have people checking, but there are simply not enough eyes to catch 
          everything! Their millions of players, and their eyes, however, are a lot more numerous. I decided to build this app both as practice and as a 
          way to help out. I mean, I can't be the only one here who notices these errors in these AAA games, right?
        </p>
        <p>
          This isn't meant to be a place for "Grammar Nazism" and not all suggestions will be implemented. The goal here is to have a central place that 
          game devs can come every once in a while (say, during the development of big patches for their games) and look through the suggestions that 
          their players put forth. They can then decide for themselves if the suggestions are in line with what they are looking for. And it's not only 
          the devs that benefit; the players will too by having a more polished game to play and also a way to brush up on their grammar skills. 
        </p>
        <p>
          For a more thorough "about" section, please refer to the About page using the nav links! Thank you for using this app, and I look forward to 
          all the changes we're going to bring about in our favorite games!
        </p>
        <p>
          Shu
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default About