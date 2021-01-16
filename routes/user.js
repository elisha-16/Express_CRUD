const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/hello', (req, res) => {
    res.send('hello World!')
  })

  router.get('/specific', (req, res) => {
    res.send('specific post')
  })

  //get back all the posts
  router.get('/find', async (req,res) => {
    try {
      const user = await User.find();
      res.json(user);
    }
    catch(error) {
      res.json({message : error});
    }
    })

//submits a post
  router.post('/create', async (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    })
    try{
    const savedUser = await user.save();
     res.json(savedUser)}
     
     catch(error){
       res.json({message:error})
     }
    });

//SPECIFIC USER
router.get('/:userId',(req,res)=> {
  res.json(req.params.userId)
});
  
//DELETE POST
router.delete('/:userId', async (req,res) => {
 try{
  const removeUser = await User.remove({_id: req.params.userId})
  res.json(removeUser)
 }
 catch(error) {
  res.json({message : error});
}
});

router.patch('/:userId', async (req,res)=>{
 try{
   const updateUser = await User.updateOne({_id: req.params.userId},
                                          { $set: {password: req.body.password}})
    res.json(updateUser);                                      
 }
 catch(error) {
  res.json({message : error});
}
});
  module.exports = router;
  