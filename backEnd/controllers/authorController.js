const prisma = require('../prisma/index')

// Creating author
exports.createAuthor = async(req, res, next) => {
    try {
        const {name} = req.body
        const result = await prisma.post.create({
            data: {
                name
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// Get all authors
exports.getAuthors = async(req, res, next) => {
    try {
        const result = await prisma.post.findMany()
        res.json(result)
    } catch (error) {
        res.json('No Authors found')
    }
}