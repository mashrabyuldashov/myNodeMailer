const express = require('express')
const app = express()

const mail = require('./utils/mail')

app.use(express.json())

const PORT = process.env.PORT || 9000

app.get('/', async(req, res) => {
    await mail(req.body.email, req.body.password, req.body.subject, req.body.text)
    res.end("Baxtiyor")
})

app.listen(PORT, console.log(PORT))