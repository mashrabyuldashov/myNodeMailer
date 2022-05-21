const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

const mailSender = async(email, content) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yoldashovmashrab@gmail.com',
            pass: '30020429'
        }
    })

    const info = await transporter.sendMail({
        from: 'yoldashovmashrab@gmail.com',
        to: 'tohirjondoniyorov@gmail.com',
        subject: 'Menman',
        text: "Nima gap"
    })

    console.log('Sapwena ketti:', info.messageId)

    console.log('Sapwenaning dumi:', nodemailer.getTestMessageUrl(info))
}

module.exports = mailSender