import React from 'react';
import HomePage from './ContainerComponents/HomePage';
import CurrentUserContextProvider from './Contexts/CurrentUserContext'

const App = () => {
  return (
    <div>
      <CurrentUserContextProvider>
        <HomePage />
      </CurrentUserContextProvider>
    </div>
  )
}

export default App;