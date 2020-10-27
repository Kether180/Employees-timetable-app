const express = require('express')
const app = express()

const port = process.env.PORT || 3000 // is use for heroku 

app.use(express.static('images'));

app.get('/meditation', function (req, res) {  

    const fileName = path.resolve(__dirname, 'images/meditation.jpg')
    res.sendFile(fileName);
})

app.get('/', function(req, res) {
    res.send('go and have a drink!!!!!!')
})

app.get('/about', function(req, res) {
    res.send('THIS IS THE ABOUT ENDPOINT')
})

app.listen(port, function() {
    console.log(`Running on port ${port}`)
})