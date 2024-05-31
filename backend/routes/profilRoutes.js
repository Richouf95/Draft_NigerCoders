const express = require('express')
const {
    getAllProfils,
    getProfil,
    createProfil,
    deleteProfil,
    updateProfil
} = require('../controllers/profilController')

const router = express.Router()

// GET all profils
router.get('/', getAllProfils)

// GET single profil
router.get('/:id', getProfil)

// Create a new profil
router.post('/', createProfil)

// DELETE a profil
router.delete('/:id', deleteProfil)

//UPDATE a profil
router.patch('/:id', updateProfil)

module.exports = router