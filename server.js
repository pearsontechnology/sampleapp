'use strict';

const express = require('express');


const PORT = 8080;


const app = express();
app.get('/', function (req, res) {
  console.log('user hit')
  console.log('Welcome to My Console,');
setTimeout(function() {
    console.log('test oom');
}, 3000);
  res.send('test oom\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
