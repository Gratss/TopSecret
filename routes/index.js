var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/R-32', function(req, res, next) {
  res.render('Car', {
      title: "Nissan GT-R R32",
      picture: "R-32.jpg",
      desc: "Компания Top Secret Japan, показала восстановленный R32, на шикарных дисках и с обвесом. Диффузоры, карнары, множество карбона и олдскульный вид не испорчен!."
  });
});

router.get('/R-33', function(req, res, next) {
  res.render('Car', {
      title: "Nissan GT-R R33",
      picture: "R-33.jpg",
      desc: "Компания Top Secret Japan показала GT-R R33 цвета шампанского, на шикарных дисках и с обвесом, ~1200 лошадинных сил под капотом."
  });
});
router.get('/SupraA70', function(req, res, next) {
  res.render('Car', {
      title: "Toyota SupraA70",
      picture: "SupraA70.jpg",
      desc: "Top Secret Japan представила нам Toyota Supra.A70 цвета шампанского, ставшего уже легендарным. Мощность выше 1000 лошадинных сил на 5500 об/мин.На автомагистрали А1 гонщик мчал со скоростью 317 км/ч (197 миль в час)"
  });
});



module.exports = router;
