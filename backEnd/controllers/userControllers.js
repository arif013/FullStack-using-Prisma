const prisma = require("../prisma/index")
const cookieToken = require("../utils/cookieToken")


// User Signup
exports.signup = async(req, res, next)=>{
    try{
        const {name, email, password} = req.body
        if(!name || !email || !password){
            throw new Error('Please provide all the fields')
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        // Send user a token
        cookieToken(user, res)

    }catch(err){
        throw new Error(err)
    }
}

// User Login
exports.login = async(req,res,next)=>{
    try{
    const {email, password} = req.body

    if(!email || !password){
        throw new Error('Please provide email and password')
    }

    // Finding user based on email
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    // If no user is there
    if(!user){
        throw new Error("User not found")
    }

    // Password mismatch
    if(user.password != password){
        throw new Error('Password is incorrect')
    }

    // User is there and validated
    cookieToken(user,res)

}catch(err){
    throw new Error(err)
}
}

// User logout
exports.logout = async(req,res,next)=>{
    try {
        res.clearCookie('token')
        res.json({
            success:true
        })
    } catch (error) {
        throw new Error(error)
    }
}