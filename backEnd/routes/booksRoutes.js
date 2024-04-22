const express = require("express")
const router = express.Router()

const isLoggedIn = require('../middlewares/isLoggedIn')
const { createBooks, getBooks } = require("../controllers/booksController")

router.route('/books/create').post(isLoggedIn, createBooks)
router.route('/books/get').get(getBooks)

module.exports = router