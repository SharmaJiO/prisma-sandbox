const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const middleware = require('../middlewares/isloggedin')

router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.get('/logout',middleware.isLoggedIn,userController.logout)


module.exports = router;