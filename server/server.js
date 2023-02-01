const express = require('express')()
const app = express
const port = 5000
const https = require('https')
const fs = require('fs')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

const options = {
    key: fs.readFileSync('./config/cert.key'),
    cert: fs.readFileSync('./config/cert.crt'),
};

app.post('/get_media', (req, res) => {

})
https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS server started on port ${port}`)
})


