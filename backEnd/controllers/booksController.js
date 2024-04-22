const prisma = require('../prisma/index')

// Creating Books
exports.createBooks = async(req, res, next) => {
    try {
        const {title, author, genre} = req.body
        const result = await prisma.book.create({
            data: {
                title,
                author,
                genre
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
        const result = await prisma.book.findMany()
        res.json(result)
    } catch (error) {
        res.send('No books found')
    }
}