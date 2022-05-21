const nodemailer = require('nodemailer')

const mailSender = (email, password, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: password
        }
    })

    const info = transporter.sendMail({
        from: email,
        to: 'yoldashovmashrab@gmail.com',
        subject: subject,
        text: text
    })

    console.log('Sapwena ketti:', info.messageId)

    console.log('Sapwenaning dumi:', nodemailer.getTestMessageUrl(info))
}

module.exports = mailSender