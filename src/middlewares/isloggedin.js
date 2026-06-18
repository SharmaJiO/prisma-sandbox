const prisma = require('../lib/prisma')
const jwt = require('jsonwebtoken');

const isLoggedIn = async(req , res , next)=>{
try{
   const token = req.cookies.token;
   if(!token){
    return res.status(401).json({message:"Please LogIn"})
   }
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   console.log("DECODED:", decoded);
   req.user = await prisma.user.findUnique({
    where:{
        id:decoded.userId
    }
   })
   next();
}
catch(error){
    throw new Error(error)
}
}

module.exports={isLoggedIn}