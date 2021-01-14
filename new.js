const express = require('express');
const app = express();

//middlewares
app.use('/posts',(req,res) =>{
    console.log('THis is a middleware');
});

//Routes
app.get("/",(req,res) => {
    res.send('This is Elisha');
});

app.listen(8000);
