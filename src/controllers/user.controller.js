const prisma = require('../lib/prisma')
const cookieToken = require('../utils/cookieToken')

//user sign up
exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please enter required details"
            });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        // Generate token and send response
        cookieToken(user, res);

    } catch (err) {
        next(err);
    }
};

//login user
exports.login = async (req,res,next)=>{
    try{
const {email,password}=req.body
if(!email|| !password){
    throw new Error('Please provide an email')
}

const user = await prisma.user.findUnique({
    where:{
        email
    }
})
//when there is no user
if(!user){
    throw new Error('User not found')
}
//passwod mismatch
if(user.password!==password){
    throw new Error('password is incorrect')
}

//user is there and validation
cookieToken(user,res)

// res.status(200).json({
//     message: 'Login successful',
//     user:{
//         _id:user.id,
//         email:user.email
//     }
// });


    }
    catch(error){
        throw new Error(error)
    }
}

//logout
exports.logout = async(req,res)=>{
     try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Already logged out"
            });
        }

        res.clearCookie("token");

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });
    }
    catch(error){
throw new Error(error)
    }
}