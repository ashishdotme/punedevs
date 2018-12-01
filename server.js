const express = require('express');
const mongoose = require('mongoose');
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

app.get('/', (req, res) => res.send('Hello world'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));