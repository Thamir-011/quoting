
module.exports = {
    randomQuote: (req,res) => {
        const lang = req.params.lang
        const quotes = require(`../quotes/${lang}`)

        let randomQ = quotes[Math.floor(Math.random()*quotes.length)]
        res.json(randomQ)
    }
}
