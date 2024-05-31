const express = require('express')
const {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
} = require('../controllers/postController')

const router = express.Router()

// GET all posts
router.get('/', getAllPosts)

// GET single post
router.get('/:id', getPost)

// CREATE new post
router.post('/', createPost)

// DELETE a post
router.delete('/:id', deletePost)

// UPDATE a post
router.patch('/:id', updatePost)

module.exports = router