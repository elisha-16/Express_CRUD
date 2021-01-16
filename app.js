const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT||5000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
const userRoute = require('./routes/user');

app.use('/user', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
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
