
// Server setup
const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoute = require('./routes');

env.config();

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));  // Increase limit for large PDFs
app.use(emailRoute);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
