const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config();

exports.sendMail = (req, res) => {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
        tls: { rejectUnauthorized: false }
    });

    const { pdfData, email, description } = req.body;

    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'Learning With Vishal',
        html: `<p>Dear Vishal,</p>
               <p>${description}.<br />We have attached Demo pdf.</p>
               <p>Best regards,<br/>Vishal</p>`,
        attachments: [
            {
                filename: 'Demo.pdf',
                content: pdfData.split('base64,')[1],
                encoding: 'base64',
                contentType: 'application/pdf'
            }
        ]
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            res.status(200).send('Mail has been sent to your email with PDF attachment. Check your mail');
        }
    });
};
