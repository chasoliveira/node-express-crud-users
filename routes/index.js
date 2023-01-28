var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    const db = require('../db');
    const docs = await db.UserRepository.find({}).lean().exec();

    res.render('index', {docs});
});

router.get('/users', function(req, res, next) {
  res.render('user', {title:"Cadastro de Usuários"});
});

router.post('/user', async (req, res, next)=>{
  const username = req.body.username;
  const email = req.body.email;

  const db = require('../db')
  const newUser = new db.UserRepository({ username, email});
  try {
    await newUser.save();
    res.redirect('/');
  } catch (error) {
    next(error)
  }
});

module.exports = router;
