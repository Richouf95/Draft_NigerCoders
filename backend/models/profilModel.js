const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profilSchema = new Schema({
    name: {
        type: String
    },
    photoProfil: {
        url: {
            type: String
        },
        public_id: {
            type: String
        }
    },
    photoCouverture: {
        url: {
            type: String
        },
        public_id: {
            type: String
        }
    },
    bio: {
        type: String
    },
    coordonnees: {
        type: Object
    },
    parcours: {
        type: Array
    },
    competences: {
        type: Array
    },
    projets: {
        type: Array
    },
    followers: {
        type: Array
    },
    user_id: {
        type: String
    },
    favori: {
        type: Array
    }
})

module.exports = mongoose.model('Profil', profilSchema)