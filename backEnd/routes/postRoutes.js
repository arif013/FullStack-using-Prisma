const express = require("express")
const router = express.Router()

const isLoggedIn = require('../middlewares/isLoggedIn')
const { createPost, getPosts } = require("../controllers/postControllers")

router.route('/post/create').post(isLoggedIn,createPost)

router.route('/post/get').get(getPosts)

module.exports = router