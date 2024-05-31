const Profil = require('../models/profilModel')
const mongoose = require('mongoose')

// GET all profils
const getAllProfils = async (req,res) => {
    const profil = await Profil.find({  }).sort({ createdAt: -1 })

    return res.status(200).json(profil)
    // res.send({message: 'Get all profils'})
}

// GET single profil
const getProfil = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such profil'})
    }

    const profil = await Profil.findById({ _id: id })

    if(!profil) {
        return res.status(404).json({error: 'No such profil'})
    }

    return res.status(200).json(profil)
    // res.send({message: 'Get a single profil'})
}

// Create a new profil
const createProfil = async (req,res) => {
    const {name, photoProfil, photoCouverture, bio, coordonnees, parcours, competences, projets, followers, user_id} = req.body

    try {
        const profil = await Profil.create({name, photoProfil, photoCouverture, bio, coordonnees, parcours, competences, projets, followers, user_id})

        return res.status(200).json(profil)
    } catch(err) {
        return res.status(200).json({error: err.message})
    }
    // res.send({message: 'Create a new profil'})
}

// DELETE a profil
const deleteProfil = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such profil'})
    }

    const profil = await Profil.findByIdAndDelete({ _id: id })

    if(!profil) {
        return res.status(404).json({error: 'No such profil'})
    }

    return res.status(200).json(profil)
    // res.send({message: 'Delete a profil'})
}

//UPDATE a profil
const updateProfil = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such profil'})
    }

    const profil = await Profil.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!profil) {
        return res.status(404).json({error: 'No such profil'})
    }

    return res.status(200).json(profil)
    // res.send({message: 'Update a profils'})
}


module.exports = {
    getAllProfils,
    getProfil,
    createProfil,
    deleteProfil,
    updateProfil
}