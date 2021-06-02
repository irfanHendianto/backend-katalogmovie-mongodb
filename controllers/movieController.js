const connectionDB = require('../db.js')
const {Movie} = require('../models/movie')

const addMovie = async (req,res,next) =>{
    
        var movie = new Movie(
            {
                title:req.body.title,
                genre:req.body.genre,
                description:req.body.description,
                review:req.body.review,
                rating :req.body.rating,
                duration :req.body.duration,
                img_url :req.body.img_url,
                year:req.body.year,
                create_date:Date.now(),
                update_date :null

            }
        );

        movie.save( (err) => {
            if(!err){
                res.json({
                           message: 'New movie created!',
                           data: movie
                       });
                
            }else{
                res.send(err)
            }
        });
}

const getAllMovie = async (req,res,next) =>{
    Movie.find({}, (err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
}

const detailMovie = async (req,res,next) =>{
    Movie.findById(req.params.id, (err,data)=>{
        if(!err){
            res.send(data);
        }else{
            res.send(err)
        }
    })
}

const updateMovie = async (req,res,next) =>{
    var query = {"_id": req.params.id}
    
    const movie ={
        
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        review: req.body.review,
        rating : req.body.rating,
        duration : req.body.duration,
        img_url : req.body.img_url,
        year: req.body.year,
        update_date : Date.now()

    }
    Movie.findByIdAndUpdate(query, {$set: movie}, {new:true}, function (err,data){
        if(!err){
            res.status(200).json({
                message: 'movie updated!',
                updateMovie: data
            });
        }else{
            res.send(err)
        }
    });
}
const deleteMovie = async (req,res,next) =>{
    Movie.findByIdAndDelete(req.params.id, (err,data)=>{
        if(!err){
            res.status(200).json({
                code:200,
                message:"Movie deleted"
            })
        }else{
            res.send(err)
        }
    })
}

module.exports = {
    addMovie,
    getAllMovie,
    detailMovie,
    updateMovie,
    deleteMovie
}