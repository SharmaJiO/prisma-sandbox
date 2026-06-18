const express = require('express')
const router = express.Router()
const controller = require('../controllers/post.controller')
const middleware = require('../middlewares/isloggedin')


router.post('/create',middleware.isLoggedIn,controller.createPost)
router.put('/update/:PostId',middleware.isLoggedIn,controller.updatePost)
router.delete('/delete/:postId',middleware.isLoggedIn,controller.deletePost)
router.get('/allposts',middleware.isLoggedIn,controller.allPosts)
module.exports=router;