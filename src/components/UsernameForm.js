
//import react
import React from 'react'

class UsernameForm extends React.Component{
   constructor(props){
       super(props)
       this.state = {
            username:''
       }
       /// Binds both of the functions to the constructor and this
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }
   onChange(e) {
    this.setState({
        username: e.target.value,
    })
}

  onSubmit (e) {
      e.preventDefault()
      this.props.onSubmit(this.state.username)
  }

   // render function that returns things

   render(){
       return <div>
             <div>
                <h2>What is your username?</h2>
           <form onSubmit ={this.onSubmit}>
               <input type ="text" placeholder="What is your username?"  onChange ={this.onChange}/>
               <input type ="submit" />
           </form>
       </div>
       </div>
   }



}

export default UsernameForm