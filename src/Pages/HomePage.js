import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../Contexts/CurrentUserContext'
import NavBar from '../Components/NavBar'
import Jumbo from '../Components/Jumbo'
import LoginForm from '../Components/LoginForm'

const HomePage = () => {

  const [status, swapStatus] = useState("login")
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <div>
      <NavBar />
      <Jumbo />
      { currentUser ? <Dashboard /> : <LoginForm swapStatus={swapStatus} /> }
    </div>
  )
}

export default HomePage