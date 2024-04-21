const prisma = require('../prisma/index')

const jwt = require('jsonwebtoken')

const isLoggedIn = async(req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            res.send('Please login')
            throw new Error('ou are not logged in')
        }
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await prisma.user.findUnique({
            where:{
                id: decodeToken.userId
            }
        })
        next()
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = isLoggedIn