const prisma = require('../prisma/index')

// Creating a new Post
exports.createPost = async(req, res, next) => {
    try {
        const {slug, title, body, authorId} = req.body
        const result = await prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: {connect: {id:authorId}}
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
