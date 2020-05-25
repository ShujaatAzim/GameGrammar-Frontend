import React, { useContext } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { CurrentUserContext } from '../Contexts/CurrentUserContext'

const Jumbo = () => {

  const { currentUser } = useContext(CurrentUserContext)
  
  return (
    <Jumbotron>
    <h1>Welcome to Game Grammar, {currentUser}!</h1>
      <p>
        Have you noticed grammar errors in games? Game companies and creators are super busy, and things fall through 
        the cracks! Let's help them out a bit, shall we?
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default Jumbo