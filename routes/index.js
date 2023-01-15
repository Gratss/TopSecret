var express = require('express')
var router = express.Router()
//var Car = require("../models/car").Car
//var User = require("./../models/user").User
var db = require('../mySQLConnect.js')



router.get('/', function(req, res, next) {
 //       req.session.greeting = "Session started"
        res.render('index', {
                                title: 'TopSecret',
                                counter: req.session.counter
                            });
    });


/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход', error:null});
    

    });

    /* POST login/registration page. */
    router.post('/logreg', function(req, res, next) {
        var username = req.body.username
        var password = req.body.password
        db.query (`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err,users){
                if(err) return next(err)
                if(users.length > 0) {
                  var user = users[0];
                  if (password == user.password){
                    req.session.user = user.user_id
                    res.redirect('/')
                  } else {
                    res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
                  }
                } else {
                  db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user){
                    if(err) return next(err)
                    req.session.user = user.user_id
                    res.redirect('/')
                  })
                }
        })
    });
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
  });

module.exports = router;
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
/* Страница Supra a80 
router.get('/supraa80', function(req, res, next) {
  res.render('car', {
    title: "Toyota Supra A80",
    picture: "images/SupraA80.jpg",
    desc: "Top Secret Japan представила нам Toyota Supra.A80 цвета шампанского, ставшего уже легендарным. Мощность выше 1000 лошадинных сил на 1500 об/мин.На автомагистрали А1 гонщик мчал со скоростью 317 км/ч (197 миль в час)"
  })
  res.send("<h1>About Supra A80</h1>")
});
/* Страница Nissan  
router.get('/gt-r32', function(req, res, next) {
  res.render('car', {
    title: "GT-R R32",
    picture: "images/R-32.jpg",
    desc: "Компания Top Secret Japan, показала восстановленный R32, на шикарных дисках и с обвесом. Диффузоры, карнары, множество карбона и олдскульный вид не испорчен!."
  })
  res.send("<h1>About Nissan GT-R R32</h1>")
});
/* Страница  
router.get('/gt-r33', function(req, res, next) {
  res.render('car', {
    title: "GT-R R33",
    picture: "images/R-33.jpg",
    desc: "Компания Top Secret Japan показала GT-R R33 цвета шампанского, на шикарных дисках и с обвесом, ~1200 лошадинных сил под капотом."
  })
  res.send("<h1>About Nissan GT-R R33</h1>")
});
*/
module.exports = router;
