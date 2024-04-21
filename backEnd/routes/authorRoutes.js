const express = require("express")
const router = express.Router()

const isLoggedIn = require('../middlewares/isLoggedIn')
const { createAuthor, getAuthors } = require("../controllers/authorController")

router.route('/author/create').post(isLoggedIn, createAuthor)
router.route('/author/get').get(getAuthors)