const express = require('express')
const app = express()

const port = process.env.PORT || 3000 // is use for heroku 

app.get('/', function(req, res) {
    res.send('go and have a drink!!!!!!')
})

app.get('/about', function(req, res) {
    res.send('THIS IS THE ABOUT ENDPOINT')
})

app.listen(port, function() {
    console.log(`Running on port ${port}`)
})