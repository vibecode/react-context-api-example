import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Body from './components/Body'
import UserContext from './components/UserContext'

class App extends Component {
  state = {
    user: {
      avatar: "http://i.pravatar.cc/300",
      name: 'GG Allin',
      followers: 666,
      following: 66
    }
  }

  render() {
    const { user } = this.state

    return (
      <UserContext.Provider value={user}>
        <div className="app">
          <Nav />
          <Body />
        </div>
      </UserContext.Provider>
    )
  }
}

export default App
