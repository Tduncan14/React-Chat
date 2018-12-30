const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-client')

const app = express()

// creating on local server chatkit an instance of chatkit

const chatkit = new Chatkit.default({
  instanceLocator:'v1:us1:3048226e-2812-45f3-89b5-4ea7aaa1b954',
  key:'a62541d2-d55d-43cd-acb1-a548dc2c5303:gWamm8SQNP6lT1L8isnhFja/H/dv7g6QZSSefsLpE10='
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req,res) => {
  const {username} = req.body

  // creatimg the user
  chatkit
   .createUser({
     name: username,
     id: username
   })
    .then(() => res.sendStatus(201))
    .catch(error =>{
      if(error.error_type ==='services/chatkit/user_already_exists'){
        res.sendStatus(200)
      }
      else{
        res.status(error.statusCode).json(error)
      }
    })
})
app.post('/authenticate',(req,res) => {
  const authData = chatkit.authenticate({userId: req.query.user_id})
  res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
