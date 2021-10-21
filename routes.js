const router = require('express').Router();
const quoteController = require('./controllers/quotes')

router.get('/random/?:lang', quoteController.randomQuote)

module.exports = router;