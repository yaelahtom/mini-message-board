var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'pengen jajan pedes',
    user: 'Tio',
    added: new Date(),
  },
  {
    text: 'anjiiiing',
    user: 'Tomi',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'mini-message-board', messages: messages });
});

// GET new form page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'form' });
});

// post form method 
router.post('/new', (req, res, next) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  }
  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router;
