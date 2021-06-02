const express = require('express');
const router = express.Router();
const {addMovie,getAllMovie,detailMovie,updateMovie,deleteMovie} =require('../controllers/movieController');

router.post('/movie/add', addMovie);
router.get('/movies', getAllMovie);
router.get('/movie/detai/:id', detailMovie);
router.put('/movie/update/:id', updateMovie);
router.delete('/movie/delete/:id',deleteMovie);

module.exports = {
    routes: router
}