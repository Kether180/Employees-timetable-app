const path = require('path');
const express = require('express')
const app = express()

const port = process.env.PORT || 3000 // is use for heroku 

app.use(express.static('images'));

app.get('/time-management', function (req, res) {  

    const fileName = path.resolve(__dirname, 'images/time-management.jpg')
    res.sendFile(fileName);
})

app.get('/', function(req, res) {
    res.send('Welcome To Our Time Management System')


})

app.get('/time-schedule', function(req, res) {
    res.send(' Please Fill Up Your Working Time Slots')
})

app.get('/project-management', function(req, res) {
    res.send('Project Management ')
})


app.listen(port, function() {
    console.log(`Running on port ${port}`)
})
