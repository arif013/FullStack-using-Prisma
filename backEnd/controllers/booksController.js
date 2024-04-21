const prisma = require('../prisma/index')

// Creating Books
exports.createBooks = async(req, res, next) => {
    try {
        const {title, authorId} = req.body
        const result = await prisma.post.create({
            data: {
                title,
                authorId
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}

// Get Books
exports.getBooks = async(req, res, next) =>{
    try {
        const result = await prisma.post.findMany()
        res.json(result)
    } catch (error) {
        res.send('No books found')
    }
}