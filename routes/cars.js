
var express = require('express');
var router = express.Router();
var Car = require("../models/car").Car

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница молелей японцев */
router.get('/:nick', function(req, res, next) {
    Car.findOne({nick:req.params.nick}, function(err,car){
        if(err) return next(err)
        if(!car) return next(new Error("There was no such cаr in TopSecret"))
        res.render('car', {
            title: car.title,
            picture: car.avatar,
            desc: car.desc
        })
    })
})


module.exports = router;