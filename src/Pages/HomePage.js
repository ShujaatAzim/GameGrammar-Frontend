import React, { useContext, useState } from 'react'
import { CurrentUserContext } from '../Contexts/CurrentUserContext'
import NavBar from '../Components/NavBar'
import Jumbo from '../Components/Jumbo'
import LoginForm from '../Components/LoginForm'
import Dashboard from '../Components/Dashboard'
import NewUserForm from '../Components/NewUserForm'

const HomePage = () => {

  const [status, swapStatus] = useState("login")
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <div>
      <NavBar />
      <Jumbo />
      { currentUser ? <Dashboard currentUser={currentUser} /> : status === "login" ? <LoginForm swapStatus={swapStatus} /> : status === "register" ? 
        <NewUserForm swapStatus={swapStatus} /> : null }
    </div>
  )
}

export default HomePage