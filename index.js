const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const postRoute = require('./routes/posts');

app.use('/posts', postRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send({
        
        'Name': 'Elisha'
    })
  })
  const connection = mongoose
  .connect(
     process.env.MONGO_URI,
      {
          useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true
      }
  )
  .then((data) => {
      console.log("Connected to MongoDB")
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
      
    })

  .catch(error => console.log(error));
