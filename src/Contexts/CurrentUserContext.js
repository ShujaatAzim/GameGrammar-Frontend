import React, { createContext, useState } from 'react'

export const CurrentUserContext = createContext();

const CurrentUserContextProvider = props => { 

  const [currentUser, setCurrentUser] = useState("Blue")

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {props.children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserContextProvider