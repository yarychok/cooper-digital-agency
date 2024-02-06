const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '25mb' }))
app.use(express.urlencoded({ limit: '25mb '}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

const myEmail = process.env.EMAIL;
const myPassword = process.env.PASSWORD;

function sendEmail(data) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: myEmail,
                pass: myPassword,
            }
        })

        const { fullname, email, phone, project, about } = data;

        const message = `Fullname: ${fullname}\n`
                        + `Email: ${email}\n`
                        + `Phone number: + ${phone}\n`
                        + `Project type: ${project}\n`
                        + `About project: ${about}\n`

        const mail_config = {
            from: email,
            to: myEmail,
            subject: `Cooper Form Submission`,
            text: message,
        };

        transporter.sendMail(mail_config, function(error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occured: ${error}`});
            }
            return resolve({ message: 'Email sent succesfully!'})
        })
    })
}

app.get('/', (req, res) => {
    sendEmail()
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
})

app.post('/send_email', (req, res) => {
    console.log(`Received data: ${req.body}`)
    sendEmail(req.body)
        .then((response) => res.json({ message: response.message }))
        .catch((error) => res.status(500).json({ message: error.message }))
})

app.listen(port, () => {
    console.log(`nodemailer is listening at http://localhost:${port}`)
})