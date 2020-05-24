import React, { Component, createContext } from 'react'

export const CurrentUserContext = createContext();

class CurrentUserContextProvider extends Component {
  state = {
    currentUser: "Shu"
  }

  render() {
    return (
      <CurrentUserContext.Provider value={{...this.state}}>
        {this.props.children}
      </CurrentUserContext.Provider>
    )
  }
}

export default CurrentUserContextProvider