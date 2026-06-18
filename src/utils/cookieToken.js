const getJwtToken = require('../helper/getjwttoken')
const token = require('../helper/getjwttoken')
const cookieToken=(user,res)=>{
    console.log("USER:", user);
console.log("USER ID:", user.id);
   const token = getJwtToken(user.id)
   const options = {
    expires:new Date(
        Date.now()+3*24*60*60*1000
    ),
    httpOnly:true
   }
   user.password=undefined;
   res.status(200).cookie('token',token,options).json({
    success:true,
    token,
    user
   })
}

module.exports=cookieToken;