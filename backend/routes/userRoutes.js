const express = require('express')
const {
    signupUser,
    loginUser,
    getAllUsers
} = require('../controllers/userControllers')

const router = express.Router()

// GET all users
router.get('/', getAllUsers)

// signup
router.post('/signup', signupUser)

// login
router.post('/login', loginUser)

module.exports = router