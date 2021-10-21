const express = require('express')
const routes = require('./routes')
const app = express()

let port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`listening on port ${port}`);
})

app.get('/', (req,res) => {
    res.redirect('https://google.com')
})

app.use(routes)
