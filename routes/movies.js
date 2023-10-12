const express = require('express')
const movieRouter = express.Router();

const {
    insertMoive,
    getAllmovies,
    updateMoviebyId,
    getMoviebyId,
    deleteMovie
} = require("../controller/movieController");


movieRouter.post('/movies',  insertMoive);

movieRouter.get('/movies',  getAllmovies);

movieRouter.get('/movies/:id',  getMoviebyId);

movieRouter.put('/movies/:id', updateMoviebyId);

movieRouter.delete('/movies/:id', deleteMovie);



module.exports = { movieRouter };