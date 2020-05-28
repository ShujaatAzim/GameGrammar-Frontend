import React, { useContext, useState } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { CurrentUserContext } from '../Contexts/CurrentUserContext'
import About from './About'

const Jumbo = () => {

  const { currentUser } = useContext(CurrentUserContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Jumbotron>
      { currentUser ? <h1>Welcome to Game Grammar, {currentUser}!</h1> : <h1>Welcome to Game Grammar!</h1> }
      <p>
        Have you noticed grammar errors in games? Game companies and creators are super busy, and things fall through 
        the cracks! Let's help them out a bit, shall we?
      </p>
      <p>
        <Button variant="primary" onClick={handleShow}>Learn More</Button>
      </p>
    </Jumbotron>
    { show ? <About show={show} handleClose={handleClose} handleShow={handleShow}/> : null }
    </>
  )
}

export default Jumbo