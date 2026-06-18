const jwt = require('jsonwebtoken')
require('dotenv').config()

const getJwtToken=(userId)=>{
    console.log("JWT USER ID:", userId);
    return jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:'1 day'})
}

module.exports = getJwtToken