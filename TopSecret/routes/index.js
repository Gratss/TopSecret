var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/R-32', function(req, res, next) {
  res.send("<h1>Страница TopSecret Nissan GT-R R32</h1>")
});
router.get('/R-33', function(req, res, next) {
  res.send("<h1>Страница TopSecret Nissan GT-R R33</h1>")
});
router.get('/SupraA70', function(req, res, next) {
  res.send("<h1>Страница TopSecret Toyota SupraA70</h1>")
});



module.exports = router;
