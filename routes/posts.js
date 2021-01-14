const express = require('express');

const router = express.Router();
const Post = require('../models/Posts');

router.get('/hello', (req, res) => {
    res.send('hello World!')
  })

  router.get('/specific', (req, res) => {
    res.send('specific post')
  })

  //get back all the posts
  router.get('/', async (req,res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    }
    catch(error) {
      res.json({message : error});
    }
    })

//submits a post
  router.post('/', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    })
    try{
    const savedPost = await post.save();
     res.json(savedPost)}
     
     catch(error){
       res.json({message:error})
     }
    });

//SPECIFIC POST
router.get('/:postId',(req,res)=> {
  console.log(req.params.postId);
});
  
//DELETE POST
router.delete('/:postId', async (req,res) => {
 try{
  const removePost = await Post.remove({_id: req.params.postId})
  res.json(removePost)
 }
 catch(error) {
  res.json({message : error});
}
});

router.patch('/:postId', async (req,res)=>{
 try{
   const updatePost = await Post.updateOne({_id: req.params.postId},
                                          { $set: {title: req.body.title}})
    res.json(updatePost);                                      
 }
 catch(error) {
  res.json({message : error});
}
});
  module.exports = router;
  