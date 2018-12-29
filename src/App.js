import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm'

class App extends Component {
  constructor(){
    super()
    this.state ={
      currentUsername:' ',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted(username){
    // to send a post local host 3001 to user
     fetch('http://localhost:3001/users',{
       method:'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({username}),
     })
     .then(response => {
       console.log('success');
       this.setState({
         currentUsername: username
       })
     })
     .catch(error =>{
       console.error('error',error);
     })
  }

  render() {
  return <UsernameForm onSubmit = {username =>{this.onUsernameSubmitted}} />
  
  }
}

export default App