const express = require('express')
const routes = require('./routes')
const app = express()

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

app.get('/', (req,res) => {
    res.redirect('https://github.com/Thamir-011/quoting')
})

app.use(routes)
