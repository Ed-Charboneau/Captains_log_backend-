require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

app.use('/logs', routes.logs);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port 3001`);
})
