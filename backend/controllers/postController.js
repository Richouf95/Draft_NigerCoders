const Post = require('../models/postModel')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudInary')

// GET all posts
const getAllPosts = async (req,res) => {
    const post = await Post.find({  }).sort({ createdAt: -1 })

    return res.status(200).json(post)
    // res.send({message: 'GET all posts'})
}

// GET single post
const getPost = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such post'})
    }

    const post = await Post.findById({ _id: id })

    if(!post) {
        return res.status(404).json({error: 'No such post'})
    }

    return res.status(200).json(post)
    // res.send({message: 'GET a single post'})
}

// CREATE new post
const createPost = async (req,res) => {
    const {image, legende, likes, commentaires, share, userProfilId} = req.body

    try {
        if(image === null || image === undefined) {
            const post =await Post.create({legende, likes, userProfilId})
            return res.status(200).json(post)
        } 
        
        if(image) {
            const result = await cloudinary.uploader.upload(image, {
                folder: 'postImages',
                use_filename: true,
                unique_filname: false
            })
            const post =await Post.create({image: {url: result.url, public_id: result.public_id}, legende, likes, commentaires, share, userProfilId})
            return res.status(200).json(post)
        }
    } catch(err) {
        return res.status(400).json({error: err.message})
    }
    // res.send({message: 'CREATE a new post'})
}

// DELETE a post
const deletePost = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such post'})
    }

    const post = await Post.findByIdAndDelete({ _id: id })

    if(!post) {
        return res.status(404).json({error: 'No such post'})
    }

    return res.status(200).json(post)
    // res.send({message: 'DELETE a post'})
}

// UPDATE a post
const updatePost = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such post'})
    }

    const post = await Post.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!post) {
        return res.status(404).json({error: 'No such post'})
    }

    return res.status(200).json(post)
    // res.send({message: 'UPDATE a post'})
}

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}