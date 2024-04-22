const prisma = require('../prisma/index')

// Creating a new Post
exports.createPost = async(req, res, next) => {
    try {
        const { title, description, authorId, bookId} = req.body
        const result = await prisma.post.create({
            data: {
                title,
                description,
                author: {connect: {id:authorId}},
                books: {connect: {id:bookId}}
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// Get all posts
exports.getPosts = async(req, res, next) => {
    try {
        const result = await prisma.post.findMany()
        res.json(result)
    } catch (error) {
        res.json({error:'No posts found'})
    }
}
