// setup a new express application with cors and body parser
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set port to listen on 8080
const port = 8080;

// root route for the api
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// express port listener
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});