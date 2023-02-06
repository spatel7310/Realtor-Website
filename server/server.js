const express = require('express')()
const app = express
const port = 5000
const https = require('https')
const fs = require('fs')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())

function sendEmail({ recipient_email, subject, message, name }){
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'no.reply.realestatewebsite@gmail.com',
                pass: 'mpaullqitossgqjk'
            }
        })

        const mail_configs = {
            from: 'no.reply.realestatewebsite@gmail.com',
            to: 'sheev.patel@yahoo.com',
            subject: subject,
            text: `${name} sent a message: \n\n ${message} \n\nEmail: ${recipient_email}`
        }

        transporter.sendMail(mail_configs, (error, info) => {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occured`})
            }
            return resolve({ message: 'Email was sent successfully'})
        })
    })
}

const options = {
    key: fs.readFileSync('./config/cert.key'),
    cert: fs.readFileSync('./config/cert.crt'),
};

app.get('/', (req, res) => {
    sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.post('/send_email', (req, res) => {
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS server started on port ${port}`)
})


