import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'

class App extends Component {
  constructor(){
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted(username){


  }

  render() {

    return <UsernameForm onSubmit = {username =>{this.onUsernameSubmitted}}
    />
  }
}

export default App
