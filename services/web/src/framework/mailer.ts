import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE || true,
    auth: {
        user: process.env.SMTP_USER || 'jordane67@ethereal.email',
        pass: process.env.SMTP_PASS || 'yXgez2YW9kRw5Zcmhm'
    }
})

export default async details => {
    const mailOptions = {
        // Jordane Moore
        from: 'errors@blockhub',
        to: 'jordane67@ethereal.email',
        subject: '[Error] [BlockHub]',
        text: 'An error ocurred',
        html: `<pre>${JSON.stringify(details, null, 4)}</pre>`
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        if (process.env.SMTP_HOST === 'smtp.ethereal.email') {
            console.log(`[Email] Message sent: ${nodemailer.getTestMessageUrl(info)}`)
        }
    } catch (error) {
        console.log(error)
    }
}
