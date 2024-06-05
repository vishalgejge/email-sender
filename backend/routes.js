const express = require('express');
const { sendMail } = require('./emailController');
const emailRoute = express.Router();

emailRoute.post('/sendMail', sendMail);

emailRoute.get('/dummyJson', (req, res) => {
    res.json({
        message: "Backend is connected!",
        data: {
            name: "Vishal",
            email: "0itsmevishal7@gmail.com"
        }
    });
});

module.exports = emailRoute;
