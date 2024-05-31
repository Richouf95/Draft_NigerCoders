const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    image: {
        url: {
            type: String,
        },
        public_id: {
            type: String
        }
    },
    legende: {
        type: String
    },
    likes: {
        type: Array
    },
    commentaires: {
        type: Array
    },
    share: {
        type: Array
    },
    userProfilId: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)