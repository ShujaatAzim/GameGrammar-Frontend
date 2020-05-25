import React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CurrentUserContextProvider from './Contexts/CurrentUserContext'

const App = () => {
  return (
    <div>
      <CurrentUserContextProvider>
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </CurrentUserContextProvider>
    </div>
  )
}

export default App;