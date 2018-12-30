import React, { Component } from 'react'

class SendMessageForm extends Component {
    constructor(props){
    super(props)
    this.state = {
        text: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
 }
   onSubmit(e){
       e.preventDefault()
       this.props.onSubmit(this.state.text)
       this.setState({text: ''})
   }
}

 export default SendMessageForm