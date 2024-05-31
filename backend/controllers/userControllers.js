const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRETE, { expiresIn: '3d' })
}

// GET all users
const getAllUsers = async (req,res) => {
    const user = await User.find({  }).sort({ createdAt: -1 })

    return res.status(200).json(user)
}

// signup 
const signupUser = async (req,res) => {
    const {email, pwd} = req.body

    try {
        const user = await User.signup(email, pwd)

        const userId = await user._id

        // create a token
        const token = createToken(user._id)

        return res.status(200).json({email, token, userId})
    } catch(err) {
        return res.status(400).json({error: err.message})
    }
}

// login
const loginUser = async (req,res) => {
    const {email, pwd} = req.body

    try {
        const user = await User.login(email,pwd)

        // create a token
        const token = createToken(user._id)

        return res.status(200).json({email, token})
    } catch(err) {
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    signupUser,
    loginUser,
    getAllUsers
}