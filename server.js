const express = require('express')
const app = express()
const cors = require('cors')

const mail = require('./utils/mail')

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 9000

app.get('/', async(req, res) => {
    await mail(req.body.email, req.body.password, req.body.subject, req.body.text)
    console.log(req.body)
    res.end("Baxtiyor")
})

app.listen(PORT, console.log(PORT))