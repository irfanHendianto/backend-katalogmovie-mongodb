const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required:true
    },
    create_date: {
        type: Date,
        default:Date.now
    },
    update_date:{
        type: Date,
        default:Date.now
    }
})

module.exports = {Movie}