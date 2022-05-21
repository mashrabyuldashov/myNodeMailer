const http = require('http')
const nodemailer = require('nodemailer')
const mail = require('./utils/mail')

const server = http.createServer(async(req, res) => {
    await mail('tohirjondoniyorov@gmail.com')
    res.end("Baxtiyor")
})

server.listen(9000, console.log(9000))